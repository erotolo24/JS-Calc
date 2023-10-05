let preVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
// stores if decimal was clicked
//only allow one decimal per value
let decimalClicked = false
// hold values we want stored in memory
let valMemStored = ''

function numButPress(num){
    // check if number has already been clicked
    if(resultVal){
        // start new number
        newVal = num
        // reset result to create new result
        resultVal = ''
    } else {
        // used to block multiple decimals
        if (num === '.'){
            if (decimalClicked != true){
                // takes current value of newVal and adds it to total
                newVal += num
                // sets it to true
                decimalClicked = true
            } 
        } 
        else {
                newVal += num
            }
    }
    document.getElementById('entry').value = newVal
}

function mathButPress(operator){
    // checks if previous calculation has value
    // if not, makes preVal as new value
    if(!resultVal){
        prevVal = newVal
    }
    else {
        // stores result as previous value
        prevVal = resultVal
    }
    newVal = ''
    decimalClicked = false
    mathOperator = operator
    document.getElementById('entry').value = ''
}

function equalButPress(){
    decimalClicked = false
    prevVal = parseFloat(prevVal)
    newVal = parseFloat(newVal)

    //perform calculations based in stored operator
    switch(mathOperator){
        case '+':
            resultVal = prevVal + newVal
            break
        case '-':
            resultVal = prevVal - newVal
            break
        case '*':
            resultVal = prevVal * newVal
            break
        case '/':
            resultVal = prevVal / newVal
            break
        // this is for if equals is hit without an operator
        default:
            resultVal = newVal
    }
    prevVal = newVal
    document.getElementById('entry').value = resultVal
}

// clears all but memory
function clearButPress(){
    let preVal = ''
    let newVal = ''
    let resultVal = ''
    let mathOperator = ''
    let decimalClicked = false
    document.getElementById('entry').value = '0'
}

// stores the current value to 'entry' in valMemStored
function copyButPress(){
    valMemStored = document.getElementById('entry').value
}

// if it has a value, paste it into entry and assign it as the new val
function pasteButPress(){
    if (valMemStored){
        document.getElementById('entry').value = valMemStored
        newVal = valMemStored
    }
}