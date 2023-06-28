"use client"
import FetchData from "../../components/Fetchdata";
import { ProgressSpinner } from "primereact/progressspinner";
import Layout from "../../Layout";
import '../../globals.css';
import { HomeContext } from "@/app/components/HomeContext";
import ContainerAlbum from "@/app/components/ContainerAlbum";


import "primeflex/primeflex.css"
import "primeicons/primeicons.css"

//theme
import "primereact/resources/themes/arya-orange/theme.css";

//core
import "primereact/resources/primereact.min.css";

export default function SongDetails({ params }) {
    const { data, error, loading } = FetchData(`https://api.spotify.com/v1/albums/${params.id}`);

    if (loading) {
        return (
            <div className='flex align-items-center justify-content-center min-h-screen bg-black-alpha-90'>
                <ProgressSpinner className='' animationDuration=".7s" />
            </div>
        );
    }

    if (error) {
        return <div className='flex align-items-center justify-content-center min-h-screen font-bold text-white text-5xl bg-black-alpha-90'>
            Une erreur s&apos;est produite: {error.message}
        </div>;
    }

    const images = data.images[0].url
    const albums = data.tracks.items
    const titre = data.name


    return (
        <Layout >
            <HomeContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        {isLoggedIn ? (
                            <ContainerAlbum
                                titre_container={titre}
                                data={albums}
                                img={images}
                            />

                        ) : (
                            <>
                                <ContainerAlbum
                                    titre_container={titre}
                                    data={albums}
                                    img={images}
                                />
                            </>
                        )}
                    </>
                )}
            </HomeContext.Consumer>
        </Layout>
    );
}
