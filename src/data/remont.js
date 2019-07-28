const {randomInt, randomArrayElement, padNumber} = require('./utils');


module.exports = {remont: (number)=>(elevators)=>{
    return new Array(number).fill(0).map(e => item(elevators));
}};

const item = (elevators)=>{
    return {
        id: randomInt(1, 1000),
        elevatorId: randomArrayElement(elevators).id,
        remontType: randomInt(1, 40),
        createdAt: new Date(
            2019, randomInt(1, 12), randomInt(1, 31),
            randomInt(0, 23), randomInt(0, 59), randomInt(0, 59), randomInt(0, 999)
        ),
    };
};
