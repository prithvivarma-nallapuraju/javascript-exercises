const sum = (num1,num2) => {
    let sum = 0;
    for(num1;num1<=num2;num1++) {
        sum = sum+num1
    }
    return sum
}

const sumAll = (num1,num2) => {
    if(typeof num1 != typeof num2) {
        return 'ERROR'
    }else if(num1>0) {
        if(num1<num2) {
            return sum(num1,num2)
        }else{
            return sum(num2,num1)
        }
    }else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
