import React from 'react';
import Image from 'next/image';
import Fav from './Fav';
import { HomeContext } from './HomeContext';

export default function SongInPlaylist({ titresong, img, compteur, duree, key }) {

    const formatDuration = (durationMs) => {
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const res_timer = formatDuration(duree)
    return (
        <>
            <HomeContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        {isLoggedIn ? (
                            <div className="flex flex-row align-items-center justify-content-between border-solid border-green-500 pl-3">
                                <div className='flex align-items-center gap-5'>
                                    <p>{compteur}</p>
                                    <Image alt="Card" src={img} width={100} height={100} />
                                    <h2>{titresong}</h2>
                                    <p>{res_timer}</p>
                                </div>
                                <div className='flex flex-row align-items-center gap-2 pr-3'>
                                    <span className="pi pi-fw pi-play cursor-pointer"></span>
                                    <Fav />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-row align-items-center justify-content-between border-solid border-green-500 cursor-pointer pl-3">
                                    <div className='flex align-items-center gap-5'>
                                        <p>{compteur}</p>
                                        <Image alt="Card" src={img} width={100} height={100} />
                                        <h2>{titresong}</h2>
                                        <p>{res_timer}</p>
                                    </div>
                                    <div className='flex flex-row align-items-center gap-2 pr-3'>
                                        <span className="pi pi-fw pi-play cursor-pointer"></span>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </HomeContext.Consumer>
        </>

    )
}
