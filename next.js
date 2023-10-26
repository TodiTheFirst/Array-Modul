const ids = new Set([1,2,3]);
//set ненмого отличается от обычных масивов чем конкретно смотри 204 point
 //  в отличие от обычных массивов нельзя вызвать определенный эллемент при помощи индекса [0]
 console.log(ids.has(2));// проверяет есть ли тот или иной элемент
 ids.add(2); // позволяет добавить элемент если он уникален в данно случае он не добавится так как у нас уже есть итем с значением 2
 ids.delete('Java'); // позваляет удалить любой элемент если элемент который ты пытаешься удалить не является частью Set то ничего не произойдет 
 for (const entry of ids.entries()) { //даёт увидить все введённые данные
    console.log(entry);
 };

// set  используется для уверенности что один обьект не будет использоваться больше 1 раза 

// const person1 = {name: 'Oleg'};
// const person2 = {name: 'Ilya'};

// const personData1 = new Map([[person1, [{date: 'yesterday',pe: 10}]]]);

// personData1.set(person2, [{date: 'two weeks ago', price:100}]);

// console.log(personData1);
// console.log(personData1.get(person1)); // map работает по системе кеев

// for (const [key, value] of personData1.entries()) {
//     console.log(key, value);
// }

// for (const key of personData1.keys()) {
//     console.log(key);
// }

// for (const value of personData1.values()) {
//     console.log(value);
// }

// console.log(personData1.size);

let person = {name: 'Oleg'};
const persons = new WeakSet(); 
//WeakSet() в отличие от обычного set позволяет убрать данные в гарбейдж коллектор чтоб данные больше не могли взаимодействовать с чем либо

person.add(person);

// ... some operation

person = null; 

console.log(person);

const personData = new WeakMap();
personData.set(person, 'Extra Info!');

person=null

console.log(personData);

