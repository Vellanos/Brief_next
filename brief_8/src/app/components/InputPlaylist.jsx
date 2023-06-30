import React, { useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useSession } from "next-auth/react";
import PostData from "./PostData";


export default function InputPlaylist() {

    const { data: session } = useSession()
    const userId = session.user.id
    const scopes = "playlist-modify-private,playlist-modify-public";

    const url = `https://api.spotify.com/v1/users/${userId}/playlists?scope=${encodeURIComponent(scopes)}`;
    PostData(url)

    const createPlaylist = () => {
        PostData(url)
    }

    return (

        <div className="card flex align-items-center gap-2 mb-3">
            <h2>Créer une playlist : </h2>
            <div className="flex flex-column gap-2">
                <InputText id="name" aria-describedby="name-help" placeholder="Nom de la playlist" />
            </div>
            <div className="flex flex-column gap-2">
                <InputText id="description" aria-describedby="description-help" placeholder="Description" />
            </div>
            <div className="card flex gap-3">
                <Button label="Submit" icon="pi pi-check" onClick={createPlaylist} />
            </div>
        </div>

    )
}
