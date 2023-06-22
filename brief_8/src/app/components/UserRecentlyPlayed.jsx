import { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import "../style/CardContainer.css"

export default function UserRecentlyPlayed({ titre_container }) {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/recently-played')
            .then(response => response.json()) // Convert the response to JSON here
            .then(data => {
                setTracks(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const recentlyPlayedTracks = tracks.data.items.map(item => ({
        name: item?.track?.name,
        id: item?.track?.id,
        album: {
            name: item?.track?.album?.name,
            id: item?.track?.album?.id,
            image: item?.track?.album?.images[0]?.url,
            artist: item?.track?.artists[0]?.name,
        },
    }))

    const header = (img) => (
        <img alt="Card" src={img} />
    );

    return (
        <div className='card-container pb-5 pl-3 pr-3 pt-2 ml-1 mr-1'>
            <div className='flex flex-row justify-content-between mt-3 mb-3'>
                <h2> {titre_container} </h2>
                <a href="">Tout afficher</a>
            </div>
            <div className="flex">
                {recentlyPlayedTracks.slice(0, 6).map((album) =>
                    <Card
                        key={album.id}
                        title={album.name}
                        subTitle={album.album.artist}
                        header={header(album.album.image)}
                        className="md:w-25rem m-3 bg-black-alpha-30 hover:bg-black-alpha-10 text-white text-sm customTitle p-3 cursor-pointer">
                    </Card>
                )}
            </div>
        </div>
    );

}
