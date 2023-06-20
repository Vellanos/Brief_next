"use client"
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

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
            <div className="flex align-items-center">
                <Button
                    icon="pi pi-search"
                    className="mr-2 p-button-rounded p-button-secondary"
                />
                <Button
                    icon="pi pi-user"
                    className="mr-2 p-button-rounded p-button-secondary"
                />
            </div>
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

    return <div className='mb-1'>{renderNavbar()}</div>;
};

export default NavBar;
