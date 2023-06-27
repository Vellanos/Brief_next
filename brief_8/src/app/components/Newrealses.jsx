import { useState, useEffect } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import "../style/CardContainer.css"
import ContainerCard from './ContainerCard';

export default function NewRealses() {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/new-realses')
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
    const NewRealses = artists.data.items
    // console.log(NewRealses);

    return (
        <ContainerCard
            titre_container="Les nouvelles sorties"
            data={NewRealses}
        />
    );

}

