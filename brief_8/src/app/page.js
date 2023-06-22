'use client'
import React from 'react';
import CardContainer from './components/CardHorizontalContainer'

import "primeflex/primeflex.css"
import "primeicons/primeicons.css"

//theme
import "primereact/resources/themes/arya-orange/theme.css";

//core
import "primereact/resources/primereact.min.css";


function App() {
  return (
    <>
      <div className='card-container h-auto pb-5 pl-3 pr-3 pt-2'>

        <CardContainer titre="Podcasts" />
        <CardContainer titre="Recommandés" />
        <CardContainer titre="Les classements" />
      </div>
    </>
  );
}

export default App;
