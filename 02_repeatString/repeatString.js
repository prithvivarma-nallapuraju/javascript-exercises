const repeatString = function(str,num) {
    let i;
    let conStr='';
    if(num<0) {
        return 'ERROR';
    }
    for(i=0;i<num;i++) {
        conStr = conStr+str;
    }
    return conStr;
};

// Do not edit below this line
module.exports = repeatString;
