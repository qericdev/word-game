import React from 'react'
import Menu from './components/Menu'
import Box from './components/Box'
import boxes from './boxes'
import nones from './nones'
import Keyboard from './components/Keyboard'


export default function Game(){

    const [word, setWord] = React.useState(JSON.parse(localStorage.getItem("word"))||"")
   
    /* If JSON.parse(localStorage.getItem("day")) === 0 (occurs when the day is Sunday), it not going to save data because 0 is evaluated as false */

    const [day, setDay] = React.useState(JSON.parse(localStorage.getItem("day"))||"")
    if(day === "" && JSON.parse(localStorage.getItem("day") === 0)) {
        setDay(0)
    }

    const [validatorWord, setValidatorWord] = React.useState(JSON.parse(localStorage.getItem("validatorWord"))||false)

    const date = new Date()
    const today = date.getDay()
    
    React.useEffect(( )=> {
        if(today !== day) {
        const prenones = nones[Math.floor(Math.random()*nones.length)].toUpperCase().split("")
        setWord(prenones)
        setDay(today)
        setData(boxes)
        setPosition(0)
        setLineValidator([false, false, false, false, false, false])
        setWordExistOrNot("")
        setWordExist(false)
        setMoreLetters(false)
        setValidatorWord(false)
        }
    },[])
   
    const selectedWord = word
    
    let n
    
    const [data, setData] = React.useState(JSON.parse(localStorage.getItem("data"))||boxes)
    const [position, setPosition] = React.useState(JSON.parse(localStorage.getItem("position"))||0)
    const [lineValidator, setLineValidator] = React.useState(JSON.parse(localStorage.getItem("lineValidator"))||[false, false, false, false, false, false])
    const [wordExistOrNot, setWordExistOrNot] = React.useState(JSON.parse(localStorage.getItem("wordExistOrNot"))||"")
    const [wordExist, setWordExist] = React.useState(JSON.parse(localStorage.getItem("wordExist"))||false)
    const [moreLetters, setMoreLetters] = React.useState(JSON.parse(localStorage.getItem("moreLetters"))||false)

    React.useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
        localStorage.setItem("day", JSON.stringify(day))
        localStorage.setItem("position", JSON.stringify(position))
        localStorage.setItem("lineValidator", JSON.stringify(lineValidator))
        localStorage.setItem("wordExistOrNot", JSON.stringify(wordExistOrNot))
        localStorage.setItem("wordExist", JSON.stringify(wordExist))
        localStorage.setItem("moreLetters", JSON.stringify(moreLetters))
        localStorage.setItem("word", JSON.stringify(word))
        localStorage.setItem("validatorWord",JSON.stringify(validatorWord))
    },[data,day])

    let checkIfThisWordExist = ""

    if(data[4].letter !== "" && data[5].letter === "") {
        for(let j = 0; j < 5; j++) {
            checkIfThisWordExist += data[j].letter
        }
    } else if(data[9].letter !== "" && data[10].letter === "") {
        for(let j = 0; j < 5; j++) {
            checkIfThisWordExist += data[j+5].letter
        }
    } else if(data[14].letter !== "" && data[15].letter === "") {
        for(let j = 0; j < 5; j++) {
            checkIfThisWordExist += data[j+10].letter
        }
    } else if(data[19].letter !== "" && data[20].letter === "") {
        for(let j = 0; j < 5; j++) {
            checkIfThisWordExist += data[j+15].letter
        }
    } else if(data[24].letter !== "" && data[25].letter === "") {
        for(let j = 0; j < 5; j++) {
            checkIfThisWordExist += data[j+20].letter
        }
    } else if(data[29].letter !== "") {
        for(let j = 0; j < 5; j++) {
            checkIfThisWordExist += data[j+25].letter
        }
    }

    let checkIfThisWordExistTwo = checkIfThisWordExist


    React.useEffect(()=> {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${checkIfThisWordExist}`)
            .then(res => res.json())
            .then(wordExplained => setWordExistOrNot(wordExplained))
    },[checkIfThisWordExistTwo])


    function handleClick(lett){

        let countColor = 0
        let isWordFinded = false
        let checkPosition = 0

        if(lineValidator[0] === true) {
            checkPosition = 0
        }
        if(lineValidator[1] === true) {
            checkPosition = 5
        }
        if(lineValidator[2] === true) {
            checkPosition = 10
        }
        if(lineValidator[3] === true) {
            checkPosition = 15
        }
        if(lineValidator[4] === true) {
            checkPosition = 20
        }
        
        
       
        for(let i = 0; i < 5; i++) {
            if(data[i+checkPosition].color === "#66A060") {
                countColor += 1
            }
        }
        
        if(countColor === 5) {
            isWordFinded = true
        }


                if(lineValidator[0] === false && position < 5 && !isWordFinded) {
                    data[position].letter = lett
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition + 1)
                    setMoreLetters(false)
                }
                else if(lineValidator[0] === true && lineValidator[1] ===false && position >=  5 && position < 10 && !isWordFinded){
                    data[position].letter = lett
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition + 1)
                    setMoreLetters(false)
                }
                else if(lineValidator[1] === true && lineValidator[2] ===false && position >=  10 && position < 15 && !isWordFinded){
                    data[position].letter = lett
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition + 1)
                    setMoreLetters(false)
                }
                else if(lineValidator[2] === true && lineValidator[3] ===false && position >=  15 && position < 20 && !isWordFinded){
                    data[position].letter = lett
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition + 1)
                    setMoreLetters(false)
                }
                else if(lineValidator[3] === true && lineValidator[4] ===false && position >=  20 && position < 25 && !isWordFinded){
                    data[position].letter = lett
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition + 1)
                    setMoreLetters(false)
                }
                else if(lineValidator[4] === true && lineValidator[5] ===false && position >=  25 && position < 30 && !isWordFinded){
                    data[position].letter = lett
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition + 1)
                    setMoreLetters(false)
                }
    }
    
    function handleDelete() {
    setWordExist(false)
    setMoreLetters(false)
    if(position >= 1) {
        switch(position) {

            case 5:
                if(lineValidator[0] !== true){
                    data[position-1].letter = ""
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition - 1)
                }
                break;

            case 10:
                if(lineValidator[1] !== true){
                    data[position-1].letter = ""
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition - 1)
                }
                break;

            case 15:
                if(lineValidator[2] !== true){
                    data[position-1].letter = ""
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition - 1)
                }
                break;    
            
            case 20:
                if(lineValidator[3] !== true){
                    data[position-1].letter = ""
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition - 1)
                }
                break;
                
            case 25:
                if(lineValidator[4] !== true){
                    data[position-1].letter = ""
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition - 1)
                }
                break;
            
            case 30:
                if(lineValidator[5] !== true){
                    data[position-1].letter = ""
                    setData(prevData => [...prevData])
                    setPosition(prevPosition => prevPosition - 1)
                }
                break;  

            default:
                data[position-1].letter = ""
                setData(prevData => [...prevData])
                setPosition(prevPosition => prevPosition - 1)
                break;
        }
    }
    }
    
  
    function handleCompare() {


        if(((data[4].letter !== "" && data[5].letter === "") || (data[9].letter !== "" && data[10].letter === "") || (data[14].letter !== "" && data[15].letter === "") || (data[19].letter !== "" && data[20].letter === "") || (data[24].letter !== "" && data[25].letter === "")  || data[29].letter !== "") && Array.isArray(wordExistOrNot)) {
            
            if(data[4].letter !== "" && data[5].letter === "")  { 
                n = 0
                lineValidator[0] = true 
                setLineValidator(prevLineValidator => [...prevLineValidator])}
            if(data[9].letter !== "" && data[10].letter === "") { 
                n = 5 
                lineValidator[1] = true 
                setLineValidator(prevLineValidator => [...prevLineValidator])}
            if(data[14].letter !== "" && data[15].letter === ""){ 
                n = 10
                lineValidator[2] = true 
                setLineValidator(prevLineValidator => [...prevLineValidator])}
            if(data[19].letter !== "" && data[20].letter === ""){ 
                n = 15
                lineValidator[3] = true 
                setLineValidator(prevLineValidator => [...prevLineValidator])}
            if(data[24].letter !== "" && data[25].letter === ""){ 
                n = 20
                lineValidator[4] = true 
                setLineValidator(prevLineValidator => [...prevLineValidator])}
            if(data[29].letter !== ""){ 
                n = 25
                lineValidator[5] = true 
                setLineValidator(prevLineValidator => [...prevLineValidator])}
            
            
            

            // Yellow Color
            let numSameLetters = []

            for(let i = 0; i < 5 + n; i++) {
                let count = 0
                for(let j = 0; j < 5; j++) {
                    if(selectedWord[i] === selectedWord[j]) {
                        count += 1
                    }
                }
                numSameLetters.push(count)
            }

            switch (n) {
                case 0:
                        for(let i = 0; i < 5; i++) {
                            let counter = 0
                            if(selectedWord[i] === data[i].letter) {
                                    counter += 1
                            }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++) {
                            if(selectedWord[i] === data[j].letter && counter < numSameLetters[i]) {
                                data[j].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                        }
                break;

                case 5:
                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j].letter && counter < numSameLetters[i]){
                                data[j].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+5].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+5].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+5].letter && counter < numSameLetters[i]){
                                data[j+5].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }
                break;

                case 10:
                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i].letter) {
                            counter += 1
                        }
                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j].letter && counter < numSameLetters[i]){
                                data[j].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter += 1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+5].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+5].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+5].letter && counter < numSameLetters[i]){
                                data[j+5].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+10].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+10].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+10].letter && counter < numSameLetters[i]){
                                data[j+10].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }
                break;

                case 15:
                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i].letter) {
                            counter += 1
                        }
                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j].letter && counter < numSameLetters[i]){
                                data[j].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+5].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+5].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+5].letter && counter < numSameLetters[i]){
                                data[j+5].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+10].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+10].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+10].letter && counter < numSameLetters[i]){
                                data[j+10].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+15].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+15].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+15].letter && counter < numSameLetters[i]){
                                data[j+15].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }
                break;

                case 20:
                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i].letter) {
                            counter += 1
                        }
                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j].letter && counter < numSameLetters[i]){
                                data[j].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+5].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+5].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+5].letter && counter < numSameLetters[i]){
                                data[j+5].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+10].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+10].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+10].letter && counter < numSameLetters[i]){
                                data[j+10].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+15].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+15].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+15].letter && counter < numSameLetters[i]){
                                data[j+15].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+20].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+20].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+20].letter && counter < numSameLetters[i]){
                                data[j+20].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }
                break;

                case 25:
                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i].letter) {
                            counter += 1
                        }
                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j].letter && counter < numSameLetters[i]){
                                data[j].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+5].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+5].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+5].letter && counter < numSameLetters[i]){
                                data[j+5].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+10].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+10].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+10].letter && counter < numSameLetters[i]){
                                data[j+10].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+15].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+15].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+15].letter && counter < numSameLetters[i]){
                                data[j+15].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+20].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+20].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+20].letter && counter < numSameLetters[i]){
                                data[j+20].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }

                    for(let i = 0; i < 5; i++) {
                        let counter = 0
                        if(selectedWord[i] === data[i+25].letter) {
                            counter += 1
                        }

                        for(let z = 0; z < 5; z++) {
                            if(selectedWord[i] === selectedWord[z] && i!==z){
                                if(selectedWord[z] === data[z+25].letter) {
                                    counter += 1
                                }
                            }
                        }
                        for(let j = 0; j < 5 ; j++){
                            if(selectedWord[i] === data[j+25].letter && counter < numSameLetters[i]){
                                data[j+25].color = "#CEB02C"
                                setData(prevData => [...prevData])
                                counter+=1
                            }
                        }
                    }
                break;
            }
            // Green Color
                switch(n) {
                    case 0:
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i].letter === selectedWord[i]) {
                                data[i].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                    break;

                    case 5:
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i].letter === selectedWord[i]) {
                                data[i].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+5].letter === selectedWord[i]) {
                                data[i+5].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                    break;
                    
                    case 10:
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i].letter === selectedWord[i]) {
                                data[i].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+5].letter === selectedWord[i]) {
                                data[i+5].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+10].letter === selectedWord[i]) {
                                data[i+10].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                    break;
                    
                    case 15:
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i].letter === selectedWord[i]) {
                                data[i].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+5].letter === selectedWord[i]) {
                                data[i+5].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+10].letter === selectedWord[i]) {
                                data[i+10].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+15].letter === selectedWord[i]) {
                                data[i+15].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                    break; 

                    case 20:
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i].letter === selectedWord[i]) {
                                data[i].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+5].letter === selectedWord[i]) {
                                data[i+5].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+10].letter === selectedWord[i]) {
                                data[i+10].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+15].letter === selectedWord[i]) {
                                data[i+15].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+20].letter === selectedWord[i]) {
                                data[i+20].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                    break;
                    
                    case 25:
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i].letter === selectedWord[i]) {
                                data[i].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+5].letter === selectedWord[i]) {
                                data[i+5].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+10].letter === selectedWord[i]) {
                                data[i+10].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+15].letter === selectedWord[i]) {
                                data[i+15].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+20].letter === selectedWord[i]) {
                                data[i+20].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                        for(let i = 0; i < 5 ; i++) {
                            if(data[i+25].letter === selectedWord[i]) {
                                data[i+25].color = "#66A060"
                                setData(prevData => [...prevData])
                            }
                        }
                    break;
                    default:
                    break; 
                }
            
        } else {
            if(!((data[4].letter !== "" && data[5].letter === "") || (data[9].letter !== "" && data[10].letter === "") || (data[14].letter !== "" && data[15].letter === "") || (data[19].letter !== "" && data[20].letter === "") || (data[24].letter !== "" && data[25].letter === "")  || data[29].letter !== "")) {
                setMoreLetters(true)
            } else {
                setWordExist(true)
            }
            
        }
      
        let countColorTwo = 0
        for(let x = 0; x < 5; x++) {
            if(data[x+n].color === "#66A060") {
                countColorTwo += 1
            }
        }
 
        
        if(countColorTwo === 5 && validatorWord === false) {
            setValidatorWord(true)
        }
        

    }

    return (
        <div className="app">
            <Menu valid={validatorWord}/>
            <Box data={data} wordExist={wordExist} moreLetters={moreLetters}/>
            <Keyboard set={handleClick} del={handleDelete} comp={handleCompare} line={lineValidator} data = {data}/>
        </div>
    )
}