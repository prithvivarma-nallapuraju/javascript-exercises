const palindromes = (str) => {
        str = str.toUpperCase().split(',').join('').split('.').join('').split(' ').join('').split('!').join('')
    let outStr = str.split("").reverse().join("")
    return (str === outStr) ? true : false
};

// Do not edit below this line
module.exports = palindromes;
