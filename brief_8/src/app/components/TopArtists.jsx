import { useState, useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import ContainerCard from './ContainerCard';

export default function TopArtists() {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/top-artists')
            .then(response => response.json())
            .then(data => {
                setArtists(data);
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
    const TopArtists = artists.data.items
    const subtitle = "popularity"

    return (
        <div>
            <ContainerCard
                titre_container="Vos artistes préférés"
                subtitlecard={subtitle}
                add="/100"
                data={TopArtists}
            />
        </div>
    );

}

