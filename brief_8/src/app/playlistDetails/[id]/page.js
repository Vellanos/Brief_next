"use client"
import FetchData from "../../components/Fetchdata";
import { ProgressSpinner } from "primereact/progressspinner";
import Layout from "../../Layout";
// import ContainerCard from "../components/ContainerCard";
import '../../globals.css';


export default function PlaylistDetails({ params }) {
    console.log(params);
    const { data, error, loading } = FetchData(`https://api.spotify.com/v1/browse/featured-playlists/items/${params.id}`);

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

    const playlists = data.playlists.items

    // console.log(playlists)

    return (
        <Layout>
            <div className="card flex flex-column justify-content-center">
                <p> TEST </p>
                {/* <h1 className="text-white ml-2 mt-2">{decodedName}</h1>
                <div className='flex overflow-x-auto'>
                    {playlists.slice(0, 19).map((playlist) =>
                        <Card
                            key={playlist.id}
                            title={playlist.name}
                            subTitle={playlist.description}
                            header={header(playlist.images[0].url)}
                            className="m-3 bg-black-alpha-30 hover:bg-black-alpha-10 text-white text-sm customTitle p-3 cursor-pointer"
                            style={{ minWidth: '300px' }}
                        >
                        </Card>
                    )}
                </div> */}
            </div>
        </Layout>
    )
}
