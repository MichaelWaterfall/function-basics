function add7(number){
    return number + 7;
}

function multiply(num1, num2){
    return num1 * num2;
}

function capitalize(string){
    let lowerCase = string.toLowerCase();
    let upperCase = string[0].toUpperCase();
    lowerCase = lowerCase.slice(1);
    return upperCase + lowerCase;
}

function lastLetter(string){ 
    let letter = string.length - 1; 
    return string[letter]; 
}