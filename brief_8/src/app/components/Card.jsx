"use client"
import React from 'react';
import { Card as CardE } from 'primereact/card';

export default function CardCompenent() {
    const header = (
        <img className="h-8rem p-2 shadow-1" alt="Card" src="https://i.scdn.co/image/ab6761610000e5eb1c81ee037386e46e8ed081f3" />
    );

    return (
        <CardE title="Title" subTitle="Subtitle" header={header} className="w-10rem flex flex-column justify-content-center align-item-center border-double border-black-900">
            <p className="m-0">
                test
            </p>
        </CardE>

    )
}

// Penser à props pour modifier Title subtitle etc...