"use client"
import FetchData from "../components/Fetchdata";
import { ProgressSpinner } from "primereact/progressspinner";
import Layout from "../Layout";
import '../globals.css';
import { HomeContext } from "@/app/components/HomeContext";
import ContainerSearch from "../components/ContainerSearch";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


import "primeflex/primeflex.css"
import "primeicons/primeicons.css"

//theme
import "primereact/resources/themes/arya-orange/theme.css";

//core
import "primereact/resources/primereact.min.css";

export default function Search() {

    let titre = ""
    const [display, setDisplay] = useState(false)
    const [res, setRes] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [inputValue, setInputValue] = useState("")
    const [url, setUrl] = useState(`https://api.spotify.com/v1/search?query=a&type=artist&limit=50`);

    const { data, error, loading } = FetchData(url)

    useEffect(() => {
        setRes(data?.artists?.items || "");
    }, [data]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSearchClick = () => {
        if (inputValue === "") {
            return;
        }
        setSearchValue(inputValue)
        const newUrl = `https://api.spotify.com/v1/search?query=${inputValue}&type=artist&limit=50`
        setUrl(newUrl)
        setTimeout(() => {
            setDisplay(true) // Affichez les résultats après 1,5 seconde
        }, 1000);
        setRes(data.artists.items)
    };

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


    return (
        <Layout>
            <HomeContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        {/* isLoggedIn est vrai et display est vrai */}
                        {isLoggedIn && display && (
                            <div className="flex flex-column justify-content-center">
                                <div className="card flex flex-wrap justify-content-center gap-3 mt-2 mb-2">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search" />
                                        <InputText
                                            value={inputValue}
                                            placeholder="Rechercher un artiste"
                                            onChange={handleInputChange}
                                        />
                                    </span>
                                    <Button label="Rechercher" className='bg-green-500 border-green-500' onClick={handleSearchClick} />
                                </div>
                                <ContainerSearch
                                    titre_container={titre}
                                    data={res}
                                    type_link="artist"
                                />
                            </div>
                        )}

                        {/* isLoggedIn est vrai et display est faux */}
                        {isLoggedIn && !display && (
                            <>
                                <div className="card flex flex-wrap justify-content-center gap-3 mt-2 mb-2">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search" />
                                        <InputText
                                            value={inputValue}
                                            placeholder="Rechercher un artiste"
                                            onChange={handleInputChange}
                                        />
                                    </span>
                                    <Button label="Rechercher" className='bg-green-500 border-green-500' onClick={handleSearchClick} />
                                </div>
                                <div className='card-container pb-5 pl-3 pr-3 pt-2'>
                                    <div className='flex justify-content-center mt-3 mb-3'>
                                        <h2> En attente de recherche... </h2>
                                    </div>
                                    <div className="flex flex-wrap align-item-center justify-content-center">
                                    </div>
                                </div>
                            </>
                        )}

                        {/* isLoggedIn est faux et display est vrai */}
                        {!isLoggedIn && display && (
                            <div className="flex flex-column justify-content-center">
                                <div className="card flex flex-wrap justify-content-center gap-3 mt-2 mb-2">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search" />
                                        <InputText
                                            value={inputValue}
                                            placeholder="Rechercher un artiste"
                                            onChange={handleInputChange}
                                        />
                                    </span>
                                    <Button label="Rechercher" className='bg-green-500 border-green-500' onClick={handleSearchClick} />
                                </div>
                                <ContainerSearch
                                    titre_container={titre}
                                    data={res}
                                    type_link="artist"
                                />
                            </div>
                        )}

                        {/* isLoggedIn est faux et display est faux */}
                        {!isLoggedIn && !display && (
                            <>
                                <div className="card flex flex-wrap justify-content-center gap-3 mt-2 mb-2">
                                    <span className="p-input-icon-left">
                                        <i className="pi pi-search" />
                                        <InputText
                                            value={inputValue}
                                            placeholder="Rechercher un artiste"
                                            onChange={handleInputChange}
                                        />
                                    </span>
                                    <Button label="Rechercher" className='bg-green-500 border-green-500' onClick={handleSearchClick} />
                                </div>
                                <div className='card-container pb-5 pl-3 pr-3 pt-2'>
                                    <div className='flex justify-content-center mt-3 mb-3'>
                                        <h2> En attente de recherche... </h2>
                                    </div>
                                    <div className="flex flex-wrap align-item-center justify-content-center">
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </HomeContext.Consumer>
        </Layout>
    );
}
