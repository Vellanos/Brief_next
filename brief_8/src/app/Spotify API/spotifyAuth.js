import axios from 'axios';

const getToken = async () => {
    try {
        const URL = 'https://accounts.spotify.com/api/token'
        const response = await axios.post(URL,
            new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': '16906c62c84a46989fef0337f9e0075e',
                'client_secret': '86341df5b5434efba6d8f8bb37a969e4'
            }),
            {
                headers:
                {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
        const authToken = response.data.access_token;
        return authToken;
    } catch (error) {
        console.error(error.response.data);
        return null;
    }
};

export default getToken;