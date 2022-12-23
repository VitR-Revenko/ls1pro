console.log('Задание 1');

let num = [3, 5, 11, 22, 55];

for(let i = 0; i < num.length; i++) {
    console.log(num[i] ** 2);
};

console.log('Задание 2');

let capitals = {
    Kyiv: 'Ukraine',
    London: 'UK',
    Tallinn: 'Estonia'
};

for(let key in capitals) {
    console.log(`${key} is the capital of ${capitals[key]}.`)
};

console.log('Задание 3');

let arr = [2, 6, 5, 9, 15, 0, 10, 4];

for(let number of arr) {
    if(number > 4 && number < 11) {
        console.log(number)
    };
};