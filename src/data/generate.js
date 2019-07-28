const {elevators} = require('./elevators');
const {events} = require('./operations');
const {remont} = require('./remont');


const generatedElevators = elevators(2);
console.log(generatedElevators);
console.table(events(10)(generatedElevators));
console.table(remont(5)(generatedElevators));
