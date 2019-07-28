const randomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomArrayElement = (arr)=>arr[randomInt(0, arr.length - 1)]
const padNumber = (number)=>(''+number).length < 2? `0${number}` : number;


module.exports = {randomInt, randomArrayElement, padNumber};
