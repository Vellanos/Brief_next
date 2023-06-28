import React from 'react';
import FetchData from './Fetchdata';
import { ProgressSpinner } from 'primereact/progressspinner';
import { HomeContextProvider } from './HomeContext';
import ContainerCard from './ContainerCard';

export default function NewReleases({ isLoading }) {

    const { data, error, loading } = FetchData('https://api.spotify.com/v1/browse/new-releases?country=FR&limit=5');

    if (loading) {
        return (
            <div className='flex align-items-center justify-content-center min-h-screen bg-black-alpha-90'>
                <ProgressSpinner className='' animationDuration=".7s" />
            </div>
        );
    }

    if (error) {
        return <div className='flex align-items-center justify-content-center min-h-screen font-bold text-white text-5xl bg-black-alpha-90'>
            Une erreur s&apos;est produite: {error.message}
        </div>;
    }

    console.log(data);
    const albums = data.albums.items
    const subtitle = "release_date"

    return (
        <HomeContextProvider value={isLoading}>
            <div>
                <ContainerCard
                    titre_container="Nouvelles sorties"
                    subtitlecard={subtitle}
                    add=""
                    data={albums}
                    type_link="album"
                />
            </div>
        </HomeContextProvider>
    );
}
