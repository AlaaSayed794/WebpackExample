// link to solution for valid url 
function checkForNumber(inputText) {
    return ((!isNaN(inputText) && parseInt(inputText) >= 1 && parseInt(inputText) <= 100))
}

export { checkForNumber }
