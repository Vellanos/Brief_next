'use client'
import React from 'react';
import UserRecentlyPlayed from './components/UserRecentlyPlayed';
import TopArtists from './components/TopArtists';

import "primeflex/primeflex.css"
import "primeicons/primeicons.css"

//theme
import "primereact/resources/themes/arya-orange/theme.css";

//core
import "primereact/resources/primereact.min.css";


function App() {
  return (
    <>
      <div className='flex flex-column gap-2'>
        <UserRecentlyPlayed titre_container="Les dernières écoutes" />
        <TopArtists titre_container="test" />
      </div>

    </>
  );
}

export default App;
