const {randomInt, randomArrayElement, padNumber} = require('./utils');


module.exports = {events: (number)=>(elevators)=>{
    return new Array(number).fill(0).map(e => item(elevators));
}};

const item = (elevators)=>{
    return {
        eventCode: randomArrayElement(eventCodes),
        elevatorId: randomArrayElement(elevators).id,
        createdAt: new Date(
            2019, randomInt(1, 12), randomInt(1, 31),
            randomInt(0, 23), randomInt(0, 59), randomInt(0, 59), randomInt(0, 999)
        ),
    };
};

//Sample Data
const eventCodes = [
    'A1','A2','A3','A4','A5','A6','A7',
    'B1','B2','B3','B4','B5','B6',
    'C1','C2','C3','C4','C5','C6','C7','C8',
    'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13',
    'E1','E2','E3','E4','E5',
];
