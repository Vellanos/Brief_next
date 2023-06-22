"use client"
import React from 'react';
import { Card as CardE } from 'primereact/card';
import '../style/Cardstyle.css'




export default function CardCompenent() {

    const header = (
        <img className="image" alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );

    return (
        <CardE title="Title" subTitle="Subtitle" header={header} className="flex flex-column Cstyle">
        </CardE>

    )
}

// Penser à props pour modifier Title subtitle etc...