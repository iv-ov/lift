const {elevators} = require('./elevators');
const {events} = require('./events');
const {remonts} = require('./remonts');



const _elevators = elevators(100);
const _events = events(5000)(_elevators);
const _remonts = remonts(10)(_elevators);


const debug = 0;
if (debug){
    debug && console.log(_elevators);
    debug && console.table(_events);
    debug && console.table(_remonts);
} else {
    const all = {_elevators, _events, _remonts};
    console.log(JSON.stringify(all));
}
