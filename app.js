// const numbers = [1, 2, 3];
// в большинстве случае используется это

// console.log(numbers);

// const moreNumbers =  new Array (); 
// тоже самое что и [] можно использовать без new
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1,2); 
// лучше не использовать

// const moreNumbers2 = Array.from[1,2,3]; 
// неплохой используется с итемами из html
// console.log(moreNumbers2); 


// const hobbies = ['Cooking','Sporsts'];
// const data = [30 , 'Freek', {moreDetail: []}];


// const hobbies = ['Sports','Coockong'];
// hobbies.push('Running');        //добавляет итем в конце
// hobbies.unshift('Codimg')      //добавляе итем в начале
// const pops = hobbies.pop();    //удаляет помследний итем
// hobbies.shift();               //удаляет первый итем


// hobbies[1]='Coding';


// hobbies.splice(1,0, 'JavaScript'); 
//splice позволяет удалить элементы с выброного индекса по тот который вы укажите и потом добавить новые итемы(можно использовать просто для удаления)
 
// const remove = hobbies.splice(-2,1);
//пример удаления
// console.log(hobbies);

// const testThing = [1,5.3, 1.5, 10.99, -5];
// const storedResult = testThing.slice(); 
// возвращает новый масив основанный на прошлом
// .concat([3.44,39]) также как и slice  копирует выбранный массив и возращает копию массива с добавленными данными в конце
// testThing.push(5.90);

// console.log(storedResult,testThing);
// console.log(testThing.indexOf([1.5]));
// indexOf позволяет узнать индекс введенного элемента ВАЖНО если элементов с одинаковым значением больше чем один он вернёт ток первый элемент
// // lastIndexOf делает тоже самое что и indexOf только с другого конца
// console.log(testThing.includes(10,99)); // по сути тоже самое что и findIndex только проверяет есть ли определнное число или строка в обьекте

// const personeData = [{name: 'Oleg'},{name: 'Manuel'}];
// console.log(personeData.indexOf({name: "Manuel"}));


// const manuel = personData.find((person,idx,persone)=>{  //findIndex (логично показывает Index)
//   return person.name === "Manuel";
// });

// manuel.name = 'Anna';

// console.log(manuel);

const prices = [10.99 , 5.99 , 3.99 , 6, 59];
const tax = 0.19
// const taxAjustedPrices = [];

// // for (const price of prices) {
// //     taxAjustedPrices.push(price * 1 (1 +tax));
// // }

const taxAdjPrice = prices.map((price, idx,prices) => {      //команда forEach использует к каждому элементу массива заданную функцию 
  const priceObj = {index: idx,taxAdjPrice: price*(1 + tax)}; // map используется по сути как и forEach только в отличие от него создает новый массив
//   taxAdjPrice.push(priceObj);
  return priceObj;
});

// console.log(prices, taxAdjPrice);

const sortedPrices = prices.sort((a,b) => { // .sort  позволяет сортировать условия можно поместить функцию полезно для сортировки массивов
   if (a > b) {
    return 1;
   } else if (a === b ){
    return 0;
   } else {
    return -1;
   }
});
console.log(sortedPrices.reverse()); //.reverse позволяет перевернуть используется редко 

const filterArray = prices.filter(p => p > 6 );//.filter  позволяет отфильтровтаь весь массив по задданному условию
 
console.log(filterArray);


// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);


// const sum = prices.reduce((prevValue,cuValue,curIndex,prices) =>{
//     return prevValue + cuValue;
// }, 0);       //reduce упрощает уравнение при помощи сумирования элементов (не забыть указать с какого элемента начинается суммирование)

const sum = prices.reduce((preValue, cuValue) => preValue + cuValue,0);

console.log(sum);

const data = 'new york,10,99;2000';     

const transformdData = data.split(';');   // данный метод позволяет разделить строку после указанного символа

transformdData[1] = +transformdData [1]; // данный метод позволяет превратить строку в масиве в число

console.log(transformdData);

const nameFragmets = ['Oleg',  'Gol'];
const name = nameFragmets.join(' ');  // позволяет соеденить два элемента строки

console.log(name);

const copieNameFragments = [...nameFragmets];  
 //... создает массив в который помещает все обькты для которые помещаются после указанных обьектов, и записывает название массива в данном случае это nameFragmets 
nameFragmets.push('Mr');
console.log(nameFragmets,copieNameFragments);

console.log(Math.min(...prices)); //возвращает наименьшее число из перечисленных ВАЖНО РАБОТАЕТ ТОЛЬКО С ЧИСЛАМИ НЕ С МАСИВАМИ 

const persons = [{ name: 'Oleg', age: 24}, { name: 'Deni', age: 23}];
const copiedPersons = [...persons.map(person => ({
  name: person.name , 
  age: person.age
}))]; // в данной логике создаются новые обьекты

persons.push({name: 'Ilya', age: 25})
persons[0].age = 31;

console.log(persons, copiedPersons);


const nameData = ['Oleg', 'Gol','he',29];
// const firstName = nameData [0];
// const lastName = nameData [1];

const [firstName, lastName, ... otherthing] = nameData;     //  данный метод позволяет разделять массив на обьекты сильно быстрее 
console.log(firstName, lastName, otherthing);

//ЕСЛИ ПОНАДОБИТСЯ ЧТО-ТО ИЗ ЭТОГО НЕ ЗАБУДЬ НАЗНАЧИТЬ ПУТЬ К ЭТИМ СКРИПТАМ В HTML


