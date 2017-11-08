const a = 10;
const b = 20;
/*if (a > b){
    result = 'Good';
} else{
    result = 'Bad'
}
const result = a > b ? 'Good' : 'Bad';
console.log(result);


const mark = parseInt(prompt('Enter mark'));
let result;
switch (mark) {
    case 5: 
        result = 'excellent';
        break;
    case 4: 
        result = 'good';
        break;
    case 3: 
        result = 'satisfactory';
        break;
    case 2: 
        result = 'bad';
        break;
    default: 
        result = 'wrong mark';
        break;
}
console.log(result);


for (let i = 2; i <10; i + 2) {
    console.log(i);
}

let cars = [];
cars.push('Tesla Model X');
cars.push('Volfswagen Terramont');

cars[2] = 'Ferrari LaFerrari';
console.log(cars[2]);
cars[10] = 'Agera R';
console.log(cars);
let counter = 0;
for (let i = 0; i < cars.length; i++){
    if (cars[i] !== undefined){
        counter++;
    }
}
console.log('Actual count - ' + counter);*/



// Dictionary
let favCars = {};
favCars['fastest'] = 'Agera R';
favCars['mostExp'] = 'Bugatti Chiron';
favCars['mostComf'] = 'Rollc-Royce Phantom';
console.log(favCars['mostExp']);
for (let key in favCars) {
    console.log(favCars[key]);
}