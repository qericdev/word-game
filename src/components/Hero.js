import React from 'react'
import {Link} from 'react-router-dom'

export default function Hero() {

    return(
        <div className="hero">
            <div className="hero--left">
                <h1>Earn Money Playing</h1>
                <p>The game consists of guessing a word of 5 letters per day. If the participant manages to guess it, they will be able to participate in the weekly reward pot.</p>
                <div className="buttons">
                <a target="_blank" href="https://drive.google.com/file/d/1uVigU2G_DFi2clYq2yzbbtRmMd9ySkrT/view?usp=sharing"><button>Learn More</button></a>
                <Link  to="/wordlecrypto"><button id="playbutton">Play</button></Link>
                </div>

            </div>
            <div className="hero--right">
                <img src="../../images/revenue-bro.gif"/>
            </div>
        </div>
    )
}