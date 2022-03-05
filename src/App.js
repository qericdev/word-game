import React from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Navbar from './components/Navbar'
import Game from './Game'
import {Routes, Route, useLocation} from 'react-router-dom'

export default function App(){

    const location = useLocation()
    
    return (
        <div className="app--principal">
            {
                location.pathname === "/wordlecrypto" ?
                <Routes  className="app--principal">
                <Route path="/wordlecrypto" element={<Game />}/>
                </Routes>
                :
                <>
                <Navbar />
                <Hero />
                <Feature />
                </> 
            }
        </div>
    )
}