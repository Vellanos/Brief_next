import React from 'react';
import FetchData from './Fetchdata';
import { ProgressSpinner } from 'primereact/progressspinner';
import { HomeContextProvider } from './HomeContext';
import ContainerCard from './ContainerCard';

export default function Playlist({ isLoading }) {

    const { data, error, loading } = FetchData('https://api.spotify.com/v1/browse/featured-playlists?country=FR&offset=0&limit=10');

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
    const playlist = data.playlists.items
    const subtitle = "description"

    return (
        <HomeContextProvider value={isLoading}>
            <div>
                <ContainerCard
                    titre_container="A découvrir"
                    subtitlecard={subtitle}
                    add=""
                    data={playlist}
                    type_link="playlist"
                />
            </div>
        </HomeContextProvider>
    );
}
