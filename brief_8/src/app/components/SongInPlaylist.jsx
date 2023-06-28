import React from 'react';
import Image from 'next/image';

export default function SongInPlaylist({ titresong, img, compteur, duree }) {

    const formatDuration = (durationMs) => {
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const res_timer = formatDuration(duree)

    return (
        <>
            <div className="flex align-items-center border-solid border-green-500 cursor-pointer gap-5 pl-3">
                <p>{compteur}</p>
                <Image alt="Card" src={img} width={100} height={100} />
                <h2>{titresong}</h2>
                <p>{res_timer}</p>
            </div>
        </>

    )
}
