'use client'
import React from 'react';
import { HomeContext } from '../components/HomeContext';
import Layout from '../Layout';
import "../globals.css"
import MyPlaylist from '../components/MyPlaylist';
import { SessionProvider } from 'next-auth/react';

import "primeflex/primeflex.css"
import "primeicons/primeicons.css"

//theme
import "primereact/resources/themes/arya-orange/theme.css";

//core
import "primereact/resources/primereact.min.css";


function App() {
    return (
        <SessionProvider>
            <Layout >
                <HomeContext.Consumer>
                    {({ isLoggedIn }) => (
                        <>
                            {isLoggedIn ? (
                                <div className='flex flex-column gap-2'>
                                    <MyPlaylist />
                                </div>
                            ) : (
                                <>
                                    <div className='flex flex-column gap-2 justify-content-center align-items-center h-25rem'>
                                        <h1> Connectez-vous pour avoir accès à vos Playlist</h1>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </HomeContext.Consumer>
            </Layout>
        </SessionProvider>

    );
}

export default App;
