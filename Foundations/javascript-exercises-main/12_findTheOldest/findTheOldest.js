const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
     }
    )
};

function getAge(birth, death) {
    if (death) {
        return death - birth;
    } else {
        return new Date().getFullYear() - birth;
    }
}


// Do not edit below this line
module.exports = findTheOldest;
