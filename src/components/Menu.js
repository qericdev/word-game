import React from 'react'

export default function Menu(props){

    const [showStatistics, setShowStatistics] = React.useState(false)
    const [showHelp, setShowHelp] = React.useState(false)
    const [rep, setRep] = React.useState(false)

    if(props.valid === true && rep === false) {
        setShowStatistics(true)
        setRep(true)
    }
    

    function statistics() {
        setShowStatistics(prevShowStatistics => !prevShowStatistics)
    }

    function help() {
        setShowHelp(prevShowHelp => !prevShowHelp)
    }


    return (
        <div className="menu">
            <img onClick={help} className ="menu--help" src='../../images/help.png'/>
                {showHelp && <div className="help">
                    <p>Guess the <span style={{fontWeight:"bold"}}>WORDLE CRYPTO</span> in six tries.</p>
                    <img onClick={help}className="close" src="./../images/close-x.png"/>
                    <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
                    <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                    <div><hr/></div>
                    <h3>Examples</h3>
                    <img className="menu--img" src="./../images/weary.png"/>
                    <br/>
                    <p>The letter W is in the word and in the correct spot.</p>
                    <img className="menu--img" src="./../images/pills.png"/>
                    <br/>
                    <p>The letter I is in the word but in the wrong spot.</p>
                    <img className="menu--img" src="./../images/vague.png"/>
                    <br/>
                    <p>The letter U is not in the word in any spot.</p>
                    <div><hr/></div>
                    <p>A new <span style={{fontWeight:"bold"}}>WORDLE CRYPTO</span> will be available each day! (00:00 GMT -5:00) Found the word to earn points and participate in the token reward POT.</p>
                </div>}
            <h1 className ="menu--title">WORDLE CRYPTO</h1>
            
            <img onClick={statistics} className ="menu--statistic" src="../../images/statistic.png"/>
            {showStatistics && 
                <div className="statistics">
                    <h2>STATISTICS</h2>
                    <img onClick={statistics}className="close--statistics" src="./../images/close-x.png"/>
                    <h3>Played: (Coming Soon)</h3>
                    <h3>Win %: (Coming Soon)</h3>
                </div>
            }
            <img className ="menu--config" src="../../images/config.png"/>
        </div>
    )
}