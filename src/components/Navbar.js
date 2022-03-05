import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    
    return(

        <div className="navbar">
            <a className="twitter" target="_blank" href="https://twitter.com/Wordlecrypto" ><img  src="../../images/twitter.png"/></a>
            <div className="title">
                <img src="../../images/logo.png"/>
                <h1>ordle Crypto</h1>
            </div>
            <div className="menuOne">
                <img className="menuOne--img" src="../../images/align-text-left.png"/>
                <ul>
                    <li>Connect</li>
                    <Link className="link" to="/wordlecrypto">Play</Link>
                    <li>Mint</li>
                </ul>
                </div>
            
        </div>
    )
}