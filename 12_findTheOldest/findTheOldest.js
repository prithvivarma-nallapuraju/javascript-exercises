const findTheOldest = function(people) {
    let name = ''
    const d = new Date()
    for(let i=0;i<people.length;i++) {
        if(typeof(people[i].yearOfDeath) == 'undefined') {
            people[i].yearOfDeath = d.getFullYear()
        }
        if(i==people.length-1){
            break
        }else{
            const a = people[i].yearOfDeath - people[i].yearOfBirth
            const b = people[i+1].yearOfDeath - people[i+1].yearOfBirth
            if(a>b) {
                name = people[i]
            }
        }
    }
    return name
};

// Do not edit below this line
module.exports = findTheOldest;
