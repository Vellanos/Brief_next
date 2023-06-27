'use client'
import React from 'react';
import UserRecentlyPlayed from './components/UserRecentlyPlayed';
import { HomeContext } from './components/HomeContext';
import Layout from './Layout';
import TopArtists from './components/TopArtists';
import NewRealses from './components/Newrealses';

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
              </div>
            ) : (
              <>
                <div className='flex flex-column gap-2'>
                  <p> T'es pas co frérot</p>
                  <NewRealses />
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
