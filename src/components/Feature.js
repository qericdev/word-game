import React from 'react'
import {Link} from 'react-router-dom'

export default function Feature() {
    return(
        <div className="hero--feature">
            <div className="feature--left">
                <img className="feature--left--image" src="../../images/feature--img.png"/>
            </div>
            <div className="feature--right">
                <h1>Features</h1>
                <p>Play on any device, a few minutes a day, collect points and receive tokens at the end of the week.</p>
                <p>Train your mind effectively, finding words that fit the letters found.</p>
                <p>Coming soon in other languages ​​with new reward pools.</p>
                <div className="buttons">
                <a target="_blank" href="https://drive.google.com/file/d/1JcjLamKEbeL8D6R5v60MTlqx8DFAfIl4/view?usp=sharing"><button>Whitepaper (ESP)</button></a>
                <Link  to="/wordlecrypto"><button id="playbutton--feature">Play</button></Link>
                </div>
            </div>
        </div>
    )
}