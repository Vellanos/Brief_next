'use client'
import React from 'react';
import UserRecentlyPlayed from './components/UserRecentlyPlayed';
import { HomeContext } from './components/HomeContext';
import Layout from './Layout';
import TopArtists from './components/TopArtists';
import NewReleases from './components/Newreleases';
import Playlist from './components/Playlist';
import "./globals.css"

import "primeflex/primeflex.css"
import "primeicons/primeicons.css"

//theme
import "primereact/resources/themes/arya-orange/theme.css";

//core
import "primereact/resources/primereact.min.css";


function App() {
  return (
    <Layout >
      <HomeContext.Consumer>
        {({ isLoggedIn }) => (
          <>
            {isLoggedIn ? (
              <div className='flex flex-column gap-2'>
                <UserRecentlyPlayed titre_container="Les dernières écoutes" />
                <TopArtists />
                <NewReleases />
              </div>
            ) : (
              <>
                <div className='flex flex-column gap-2'>
                  <NewReleases />
                  <Playlist />
                </div>
              </>
            )}
          </>
        )}
      </HomeContext.Consumer>

    </Layout>


  );
}

export default App;
