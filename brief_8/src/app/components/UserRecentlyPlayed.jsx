import { useState, useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import CardElement from './CardElement';

export default function UserRecentlyPlayed({ titre_container }) {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/recently-played')
            .then(response => response.json())
            .then(data => {
                setTracks(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    if (loading) {
        return (
            <div className='flex align-items-center justify-content-center min-h-screen bg-black-alpha-90'>
                <ProgressSpinner className='' animationDuration="1s" />
            </div>
        );
    }

    const recentlyPlayedTracks = tracks.data.items?.map(item => ({
        name: item?.track?.name,
        id: item?.track?.id,
        album: {
            name: item?.track?.album?.name,
            id: item?.track?.album?.id,
            image: item?.track?.album?.images[0]?.url,
            artist: item?.track?.artists[0]?.name,
        },
    }))

    return (
        <div className='card-container pb-5 pl-3 pr-3 pt-2 ml-1 mr-1'>
            <div className='flex flex-row justify-content-between mt-3 mb-3'>
                <h2> {titre_container} </h2>
                <a href="">Tout afficher</a>
            </div>
            <div className="flex align-item-center justify-content-center">
                {recentlyPlayedTracks?.slice(0, 6).map((album) =>
                    <CardElement
                        title={album.name}
                        subTitle={album.album.artist}
                        img={album.album.image}
                    />
                )}
            </div>
        </div>
    );

}
