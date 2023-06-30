"use client"
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { SignIn, signIn, signOut } from "next-auth/react"
import { HomeContext } from './HomeContext';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    const items = [
        {
            label: (
                <Link href="http://localhost:3000/">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify Logo" width={36} height={36} />
                </Link>
            ),
        },
        {
            label: (
                <Link href="http://localhost:3000/favories" className='flex gap-2'>
                    Favories
                    <span className="pi pi-fw pi-heart-fill"></span>
                </Link>
            ),
        },
        {
            label: (
                <Link href="http://localhost:3000/myplaylist" className='flex gap-2'>
                    Mes Playlists
                    <span className="pi pi-fw pi-bookmark-fill"></span>
                </Link>
            ),
        },
        {
            label: (
                <Link href="http://localhost:3000/search" className='flex gap-2'>
                    Rechercher
                    <span className="pi pi-fw pi-search"></span>
                </Link>
            ),
        },
    ];

    const renderEndButtons = () => {
        return (

            <HomeContext.Consumer>
                {({ isLoggedIn }) => (
                    <>
                        {isLoggedIn ? (
                            <Button
                                onClick={() => signOut("spotify")}
                                label="Se Déconnecter"
                                rounded
                                className="text-center text-sm font-bold bg-green-500 border-transparent text-900 hover:text-900"
                            />
                        ) : (
                            <>
                                <Button
                                    onClick={() => signIn("spotify")}
                                    label="Se Connecter"
                                    rounded
                                    className="text-center text-sm font-bold bg-green-500 border-transparent text-900 hover:text-900"
                                />
                            </>
                        )}
                    </>
                )}
            </HomeContext.Consumer>
        );
    };


    const renderNavbar = () => {
        return (
            <div className="navbar-wrapper">
                <Menubar
                    model={items}
                    end={renderEndButtons()}
                    className={classNames('app-menubar', { 'mobile-menu': isMobile })}
                />
            </div>
        );
    };

    return <div className='mb-1 ml-1 mr-1'>{renderNavbar()}</div>;
};

export default NavBar;
