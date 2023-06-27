"use client"
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { SignIn, signIn, signOut } from "next-auth/react"
import { HomeContext } from './HomeContext';

const NavBar = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    const items = [
        {
            label: 'Accueil',
            icon: "pi pi-fw pi-check",
        },
        {
            label: 'Produits',
            icon: 'pi pi-fw pi-tags',
        },
        {
            label: 'Services',
            icon: 'pi pi-fw pi-cog',
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
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
                                label="Se déconnecter"
                                rounded
                                className="text-center text-sm font-bold bg-white-alpha-90 border-transparent text-900 hover:text-900"
                            />
                        ) : (
                            <>
                                <Button
                                    onClick={() => signIn("spotify")}
                                    label="Se connecter"
                                    rounded
                                    className="text-center text-sm font-bold bg-white-alpha-90 border-transparent text-900 hover:text-900"
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
