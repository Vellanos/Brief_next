'use client'
import './globals.css'
import Navbar from './components/Navbar';
import { HomeContextProvider } from './components/HomeContext';


export default function Layout({ children }) {
    return (

        <HomeContextProvider>
            <Navbar />
            {children}
        </HomeContextProvider>
    )
}