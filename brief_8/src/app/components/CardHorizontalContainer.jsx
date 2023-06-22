"use client"
import React from 'react';
import CardElement from './Card'
import fetchData from './Fetchdata';

import '../style/CardHorizontalContainer.css'

export default function CardContainer({ titre }) {
    const url = 'https://api.spotify.com/v1/browse/categories/toplists/playlists?country=FR&offset=0&limit=5'
    const { data, error, loading } = fetchData(url)
    const name_api = data?.playlists?.items.map((item) => item.name) || [];
    console.log(name_api);
    return (
        <>
            <div className='flex flex-row justify-content-between mt-3 mb-3'>
                <h2> {titre} </h2>
                <a href="">Tout afficher</a>
            </div>

            <div className="flex justify-content-center gap-3 ">
                <CardElement />
                <CardElement />
                <CardElement />
                <CardElement />
                <CardElement />
            </div>
        </>
    )
}

