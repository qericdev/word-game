import React from 'react'


export default function Keyboard(props){

let m = 0
for(let j = 0; j < 5; j++) {
    if(props.line[j] === true) {
        m += 5
    }
}


let validatorQ = 0

for (let i = 0; i < 5 + m; i++) {
    if(props.data[i].color === "#66A060" && props.data[i].letter === "Q") {
        validatorQ = 1
        
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "Q") {
        validatorQ = 2
       
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "Q" && props.line[m/5-1] !== false && m > i && validatorQ !== 1 && validatorQ !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "Q" && props.line[m/5] !== false && m + 5 > i && validatorQ !== 1 && validatorQ !== 2)) {
        validatorQ = 3
    }
}


let validatorW = 0
for (let i = 0; i < 5 + m; i++) {
    if(props.data[i].color === "#66A060" && props.data[i].letter === "W") {
        validatorW = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter ==="W") {
        validatorW = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "w" && props.line[m/5-1] !== false && m > i && validatorW !== 1 && validatorW !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "W" && props.line[m/5] !== false && m + 5 > i && validatorW !== 1 && validatorW !== 2)) {
        validatorW= 3
    }
}

let validatorE = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "E") {
        validatorE = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "E") {
        validatorE = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "E" && props.line[m/5-1] !== false && m > i && validatorE !== 1 && validatorE !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "E" && props.line[m/5] !== false && m + 5 > i && validatorE !== 1 && validatorE !== 2)) {
        validatorE = 3
    }
}

let validatorR = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "R") {
        validatorR = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "R") {
        validatorR = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "R" && props.line[m/5-1] !== false && m > i && validatorR !== 1 && validatorR !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "R" && props.line[m/5] !== false && m + 5 > i && validatorR !== 1 && validatorR !== 2)) {
        validatorR = 3
    }
}

let validatorT = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "T") {
        validatorT = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "T") {
        validatorT = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "T" && props.line[m/5-1] !== false && m > i && validatorT !== 1 && validatorT !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "T" && props.line[m/5] !== false && m + 5 > i && validatorT !== 1 && validatorT !== 2)) {
        validatorT = 3
    }
}

let validatorY = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "Y") {
        validatorY = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "Y") {
        validatorY = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "Y" && props.line[m/5-1] !== false && m > i && validatorY !== 1 && validatorY !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "Y" && props.line[m/5] !== false && m + 5 > i && validatorY !== 1 && validatorY !== 2)) {
        validatorY = 3
    }
}

let validatorU = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "U") {
        validatorU = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "U") {
        validatorU = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "U" && props.line[m/5-1] !== false && m > i && validatorU !== 1 && validatorU !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "U" && props.line[m/5] !== false && m + 5 > i && validatorU !== 1 && validatorU !== 2)) {
        validatorU = 3
    }
}

let validatorI = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "I") {
        validatorI = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "I") {
        validatorI = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "I" && props.line[m/5-1] !== false && m > i && validatorI !== 1 && validatorI !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "I" && props.line[m/5] !== false && m + 5 > i && validatorI !== 1 && validatorI !== 2)) {
        validatorI = 3
    }
}

let validatorO = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "O") {
        validatorO = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "O") {
        validatorO = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "O" && props.line[m/5-1] !== false && m > i && validatorO !== 1 && validatorO !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "O" && props.line[m/5] !== false && m + 5 > i && validatorO !== 1 && validatorO !== 2)) {
        validatorO = 3
    }
}

let validatorP = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "P") {
        validatorP = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "P") {
        validatorP = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "P" && props.line[m/5-1] !== false && m > i && validatorP !== 1 && validatorP !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "P" && props.line[m/5] !== false && m + 5 > i && validatorP !== 1 && validatorP !== 2)) {
        validatorP = 3
    }
}

let validatorA = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "A") {
        validatorA = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "A") {
        validatorA = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "A" && props.line[m/5-1] !== false && m > i && validatorA !== 1 && validatorA !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "A" && props.line[m/5] !== false && m + 5 > i && validatorA !== 1 && validatorA !== 2)) {
        validatorA = 3
    }
}

let validatorS = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "S") {
        validatorS = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "S") {
        validatorS = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "S" && props.line[m/5-1] !== false && m > i && validatorS !== 1 && validatorS !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "S" && props.line[m/5] !== false && m + 5 > i && validatorS !== 1 && validatorS !== 2)) {
        validatorS = 3
    }
}

let validatorD = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "D") {
        validatorD = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "D") {
        validatorD = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "D" && props.line[m/5-1] !== false && m > i && validatorD !== 1 && validatorD !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "D" && props.line[m/5] !== false && m + 5 > i && validatorD !== 1 && validatorD !== 2)) {
        validatorD = 3
    }
}

let validatorF = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "F") {
        validatorF = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "F") {
        validatorF = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "F" && props.line[m/5-1] !== false && m > i && validatorF !== 1 && validatorF !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "F" && props.line[m/5] !== false && m + 5 > i && validatorF !== 1 && validatorF !== 2)) {
        validatorF = 3
    }
}

let validatorG = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "G") {
        validatorG = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "G") {
        validatorG = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "G" && props.line[m/5-1] !== false && m > i && validatorG !== 1 && validatorG !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "G" && props.line[m/5] !== false && m + 5 > i && validatorG !== 1 && validatorG !== 2)) {
        validatorG = 3
    }
}

let validatorH = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "H") {
        validatorH = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "H") {
        validatorH = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "H" && props.line[m/5-1] !== false && m > i && validatorH !== 1 && validatorH !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "H" && props.line[m/5] !== false && m + 5 > i && validatorH !== 1 && validatorH !== 2)) {
        validatorH = 3
    }
}

let validatorJ = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "J") {
        validatorJ = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "J") {
        validatorJ = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "J" && props.line[m/5-1] !== false && m > i && validatorJ !== 1 && validatorJ !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "J" && props.line[m/5] !== false && m + 5 > i && validatorJ !== 1 && validatorJ !== 2)) {
        validatorJ = 3
    }
}

let validatorK = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "K") {
        validatorK = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "K") {
        validatorK = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "K" && props.line[m/5-1] !== false && m > i && validatorK !== 1 && validatorK !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "K" && props.line[m/5] !== false && m + 5 > i && validatorK !== 1 && validatorK !== 2)) {
        validatorK = 3
    }
}

let validatorL = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "L") {
        validatorL = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "L") {
        validatorL = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "L" && props.line[m/5-1] !== false && m > i && validatorL !== 1 && validatorL !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "L" && props.line[m/5] !== false && m + 5 > i && validatorL !== 1 && validatorL !== 2)) {
        validatorL = 3
    }
}

let validatorZ = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "Z") {
        validatorZ = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "Z") {
        validatorZ = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "Z" && props.line[m/5-1] !== false && m > i && validatorZ !== 1 && validatorZ !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "Z" && props.line[m/5] !== false && m + 5 > i && validatorZ !== 1 && validatorZ !== 2)) {
        validatorZ = 3
    }
}

let validatorX = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "X") {
        validatorX = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "X") {
        validatorX = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "X" && props.line[m/5-1] !== false && m > i && validatorX !== 1 && validatorX !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "X" && props.line[m/5] !== false && m + 5 > i && validatorX !== 1 && validatorX !== 2)) {
        validatorX = 3
    }
}

let validatorC = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "C") {
        validatorC = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "C") {
        validatorC = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "C" && props.line[m/5-1] !== false && m > i && validatorC !== 1 && validatorC !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "C" && props.line[m/5] !== false && m + 5 > i && validatorC !== 1 && validatorC !== 2)) {
        validatorC = 3
    }
}

let validatorV = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "V") {
        validatorV = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "V") {
        validatorV = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "V" && props.line[m/5-1] !== false && m > i && validatorV !== 1 && validatorV !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "V" && props.line[m/5] !== false && m + 5 > i && validatorV !== 1 && validatorV !== 2)) {
        validatorV = 3
    }
}

let validatorB = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "B") {
        validatorB = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "B") {
        validatorB = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "B" && props.line[m/5-1] !== false && m > i && validatorB !== 1 && validatorB !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "B" && props.line[m/5] !== false && m + 5 > i && validatorB !== 1 && validatorB !== 2)) {
        validatorB = 3
    }
}

let validatorN = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "N") {
        validatorN = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "N") {
        validatorN = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "N" && props.line[m/5-1] !== false && m > i && validatorN !== 1 && validatorN !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "N" && props.line[m/5] !== false && m + 5 > i && validatorN !== 1 && validatorN !== 2)) {
        validatorN = 3
    }
}

let validatorM = 0
for (let i = 0; i < 5 + m; i++) {
    
    if(props.data[i].color === "#66A060" && props.data[i].letter === "M") {
        validatorM = 1
    } else if(props.data[i].color === "#CEB02C" && props.data[i].letter === "M") {
        validatorM = 2
    } else if((props.data[i].color === "#D3D6DA" && props.data[i].letter === "M" && props.line[m/5-1] !== false && m > i && validatorM !== 1 && validatorM !== 2) || (props.data[i].color === "#D3D6DA" && props.data[i].letter === "M" && props.line[m/5] !== false && m + 5 > i && validatorM !== 1 && validatorM !== 2)) {
        validatorM = 3
    }
}


    return (
        <div className="keyboard">
            <div className="keyboard--firstrow">
                <div style={validatorQ === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorQ === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorQ === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("Q") }>Q</div>

                <div style={validatorW === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorW === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorW === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("W") }>W</div>

                <div style={validatorE === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorE === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorE === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("E") }>E</div>

                <div style={validatorR === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorR === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorR === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("R") }>R</div>

                <div style={validatorT === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorT === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorT === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("T") }>T</div>

                <div style={validatorY === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorY === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorY === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("Y") }>Y</div>

                <div style={validatorU === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorU === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorU === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("U") }>U</div>

                <div style={validatorI === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorI === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorI === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("I") }>I</div>

                <div style={validatorO === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorO === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorO === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("O") }>O</div>

                <div style={validatorP === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorP === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorP === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("P") }>P</div>
                
            </div>

            <div className="keyboard--secondrow">
                <div style={validatorA === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorA === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorA === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("A") }>A</div>

                <div style={validatorS === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorS === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorS === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("S") }>S</div>

                <div style={validatorD === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorD === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorD === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("D") }>D</div>

                <div style={validatorF === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorF === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorF === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("F") }>F</div>

                <div style={validatorG === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorG === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorG === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))}  onClick={ () => props.set("G") }>G</div>

                <div style={validatorH === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorH === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorH === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("H") }>H</div>

                <div style={validatorJ === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorJ === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorJ === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("J") }>J</div>

                <div style={validatorK === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorK === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorK === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("K") }>K</div>

                <div style={validatorL === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorL === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorL === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("L") }>L</div>

            </div>

            <div className="keyboard--thirdrow">
                <div onClick={props.comp} className="keyboard--thirdrow--largediv">ENTER</div>

                <div style={validatorZ === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorZ === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorZ === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("Z") }>Z</div>

                <div style={validatorX === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorX === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorX === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("X") }>X</div>

                <div style={validatorC === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorC === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorC === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("C") }>C</div>

                <div style={validatorV === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorV === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorV === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("V") }>V</div>

                <div style={validatorB === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorB === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorB === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("B") }>B</div>

                <div style={validatorN === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorN === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorN === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("N") }>N</div>

                <div style={validatorM === 1 ? {backgroundColor:"#66A060", color:"#FFFFFF"}: (validatorM === 2 ? {backgroundColor:"#CEB02C", color:"#FFFFFF"}:(validatorM === 3 ? {backgroundColor: "#818181", color:"#FFFFFF"}:{backgroundColor:"#D3D6DA"}))} onClick={ () => props.set("M") }>M</div>

                <div onClick={props.del}className="keyboard--thirdrow--largediv"><img src="../../images/Union.png"/></div>
            </div>  

        </div>
    
    )
}