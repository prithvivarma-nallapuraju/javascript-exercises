const findTheOldest = (people) => {
    const d = new Date()

    for(let i=0;i<people.length;i++) {
        if(typeof(people[i].yearOfDeath) == 'undefined') {
            people[i].yearOfDeath = d.getFullYear()
        }
    }

    const a = people[0].yearOfDeath - people[0].yearOfBirth
    const b = people[1].yearOfDeath - people[1].yearOfBirth
    const c = people[2].yearOfDeath - people[2].yearOfBirth

    if(a>b) {
        if(a>c) {
            return people[0]
        }else {
            return people[2]
        }
    }else {
        if(b>c) {
            return people[1]
        }else {
            return people[2]
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
