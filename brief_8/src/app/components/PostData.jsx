import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import getToken from '../Spotify API/spotifyAuth';

const PostData = (url, maxRetries = 2) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [retries, setRetries] = useState(0);

    const fetchToken = async () => {
        const now = new Date().getTime();
        const storedTokenTimestamp = localStorage.getItem('spotifyAuthTokenTimestamp');

        if (storedTokenTimestamp && now - storedTokenTimestamp < 3600000) {
            return localStorage.getItem('spotifyAuthToken');
        }

        const fetchedToken = await getToken();
        if (fetchedToken) {
            localStorage.setItem('spotifyAuthToken', fetchedToken);
            localStorage.setItem('spotifyAuthTokenTimestamp', now);
        } else {
            throw new Error("Failed to get token");
        }
        return fetchedToken;
    };

    const postData = useCallback(async (token) => {
        const response = await axios.post(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            setData(response.data);
            setLoading(false);
            setError(null);
        } else {
            throw new Error(`HTTP response status not OK: ${response.status}`);
        }
    }, [url]);

    const tryAgain = useCallback(async () => {
        if (retries >= maxRetries) {
            setError(new Error('Max retries exceeded.'));
            setLoading(false);
            return;
        }

        try {
            const token = await fetchToken();
            await postData(token);
        } catch (err) {
            console.error(err);
            setError(err);
            setRetries(retries => retries + 1);
        }
    }, [retries, maxRetries, postData]);

    useEffect(() => {
        setTimeout(() => {
            tryAgain();
        }, 200);
    }, [tryAgain]);

    return { data, error, loading };
};

export default PostData;
