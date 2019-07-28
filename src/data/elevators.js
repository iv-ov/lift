const {randomInt, randomArrayElement, padNumber} = require('./utils');

const elevators = (number) => {
    return new Array(number).fill(0).map(e => elevator());
};

const elevator = ()=>({
    //5-значные числа
    id: randomInt(10000, 99999),

    start_date: `${randomInt(2010, 2018)}-${padNumber(randomInt(1, 12))}-${padNumber(randomInt(1, 31))}`,

    model_id: randomArrayElement(models),
    controlStationId: randomArrayElement(controlStations),
    address: `${randomArrayElement(okruga)}, ул. ${randomArrayElement(streets)}, д. ${randomInt(1, 60)}`,
});


//Sample Data
const okruga = ['ЦАО','ЗАО','ВАО','САО','ЮАО','ЮЗАО','СЗАО','СВАО',];
const streets = [
    'Зелёная',
    'Первая',
    'Красная',
    'Новая',
    'Парковая',
    'Набережная',
    'Правобережная',
    'Новопролетарская',
    'Салтыкова-Щедрина',
    'Майская',
    'Окружная',
];
const models = [
    {name:'Model 4','creator': 'Tesla, Inc.'},
    {name:'ЛП-3','creator': 'ЗАО "УЛЗ"'},
    {name:'"Протон"','creator': 'КМЗ'},
    {name:'"Протон-М"','creator': 'КМЗ'},
    {name:'"Протон-4"','creator': 'КМЗ'},
    {name:'ЛГО-0520К','creator': 'КМЗ'},
    {name:'ЛП – 0416 ЭМ','creator': 'МЭЛ'},
    {name:'ЛП – 0626 ЭМ','creator': 'МЭЛ'},
    {name:'ЛПА-1','creator': 'Сиблифт'},
    {name:'ЛПА М6','creator': 'ELBRUS'},
    {name:'ПП-0471Щ','creator': 'Щербинский лифтостроительный завод'},
    {name:'ПП-0411Щ','creator': 'Щербинский лифтостроительный завод'},
    {name:'ПП 0601Щ','creator': 'Щербинский лифтостроительный завод'},
    {name:'ПП-1011Щ','creator': 'Щербинский лифтостроительный завод'},
];
const controlStations = [
    'ШК6000-1',
    'УКЛ (УЛ)',
    'МППЛ-С6',
    'СУЛ В8',
    'СУЛ В11',
];


module.exports = {elevators};