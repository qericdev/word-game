import React from 'react'

export default function Box(props){


    const newBoard = props.data

    const board = newBoard.map(box => <div style={{backgroundColor: box.color}} key={box.id}>{box.letter}</div>)
    
    return (
        <div className="box--cell">
            {props.moreLetters &&<div className="alert">Not enough letters</div>}
            {props.wordExist &&<div className="alert">Not in word list</div>}
            <div className='board'>{board}</div>
        </div>
    )
}