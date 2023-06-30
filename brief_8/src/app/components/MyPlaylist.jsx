import { useState, useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import ContainerCard from './ContainerCard';
// import InputPlaylist from './InputPlaylist';

export default function MyPlaylist() {
    const [playlist, setPlaylist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/my-playlist')
            .then(response => response.json())
            .then(data => {
                setPlaylist(data);
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
    const MyPlaylist = playlist.data.items
    const subtitle = "description"

    return (
        <>
            <div>
                <ContainerCard
                    titre_container="Mes playlists"
                    subtitlecard={subtitle}
                    add=""
                    data={MyPlaylist}
                    type_link="playlist"
                />
            </div>
            {/* <div className='flex align-items-center justify-content-center gap-3'>

                <InputPlaylist />
            </div> */}

        </>

    );

}

