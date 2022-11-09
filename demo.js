// Every
const funcEvery = () => {
  const ages = [32, 33, 15, 40];

  let result = ages.every(checkAge);

  function checkAge(age) {
    return age > 18;
  }
  console.log(result);
};
// funcEvery();

// entries
const funcEntries = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const f = fruits.entries();

  for (let x of f) {
    let result = x;
    console.log(result);
  }
};
// funcEntries();

// concat
const funcConcat = () => {
  const arr1 = ["Cecilie", "Lone"];
  const arr2 = [1, 2, 3];
  const arr3 = arr1.concat(arr2);
  console.log(arr3);
};
// funcConcat();

// constructor
const funcConstructor = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let text = fruits.constructor;
  console.log(text);
};
// funcConstructor

// Filter
const funcFilter = () => {
  const ages = [32, 33, 15, 40];
  const result = ages.filter(checkAdult);

  function checkAdult(age) {
    return age >= 18;
  }
  console.log(result);
};
// functionFilter();

// Fill
const funcFill = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Guava"];
  fruits.fill("Kiwi", 1, 5);
  console.log(fruits);
};
// funcFill();

//Find
const funcFind = () => {
  const ages = [3, 10, 18, 20];

  function checkAge(age) {
    return age > 18;
  }
  let result = ages.find(checkAge);

  console.log(result);
};
// funcFind();

// From
const funcFrom = () => {
  let text = "ABCDEFG";
  const myArr = Array.from(text);
  console.log(myArr);
};
// funcFrom();

//copyWithin
const funcCopyWithin = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

  let result = fruits.copyWithin(2, 0, 2);
  console.log(result);
};
// funcCopyWithin();

//findIndex
const funcFindIndex = () => {
  const ages = [3, 10, 18, 20];

  let result = ages.findIndex(checkAge);

  function checkAge(age) {
    return age > 18;
  }
  console.log(result);
};
// funcFindIndex();

// forEach
const funcForEach = () => {
  // let sum = 0;
  const numbers = [65, 44, 12, 4];
  numbers.forEach(myFunction);

  let result = numbers;
  // function myFunction(item) {
  //   sum += item;
  // }
  function myFunction(item, index, arr) {
    arr[index] = item * 10;
  }
  console.log(result);
};
// funcForEach();

// includes
const funcincludes = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let result = fruits.includes("Banana", 3);
  console.log(result);
};
// funcincludes();

// indexOf
const funcIndexof = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
  let index = fruits.indexOf("Apple", 3);
  console.log(index);
};
// funcIndexof();

// Join
const funcJoin = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let text = fruits.join(" and ");
  console.log(text);
};
// funcJoin();

// keys
const funcKeys = () => {
  const fruits = ["banana"];
  const num = [100, 200, 300, 400];
  let arr = [
    { id: 11, movieName: "YJHD", genre: "romantic", rating: 4, liked: "true" },
    { id: 22, movieName: "ZNMD", genre: "drama", rating: 5, liked: "true" },
    { id: 33, movieName: "Shiva", genre: "fantasy", rating: 3, liked: "false" },
    { id: 44, movieName: "Hulk", genre: "action", rating: 3, liked: "false" },
    { id: 55, movieName: "Thor", genre: "adventure", rating: 5, liked: "true" }
  ];
  let myobj = { name: "Nitish", phone: 1234, active: true };
  const keys = Object.keys(myobj);
  const values = Object.values(myobj);
  // console.log(keys);
  // console.log(values);
  if (myobj && myobj.length) {
    console.log(myobj);
  }
  // console.log(typeof num);
  if (myobj && Object.values(myobj)) {
    console.log(myobj);
  }
};
// funcKeys();

// lastindexOf
const funcLastindexof = () => {
  const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
  let index = fruits.lastIndexOf("Apple");

  let result = index;
  console.log(result);
};
// funcLastindexof();

// length
const funcLength = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.length = 2;

  let result = fruits;
  console.log(result);
};
// funcLength();

// map()
const funcMap = () => {
  // const numbers = [65, 44, 12, 4];
  // const newArr = numbers.map(myFunction);

  // let result = newArr;
  // console.log(result);

  // function myFunction(num) {
  //   return num * 10;
  // }

  // "OR"

  const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
  ];

  let result = persons.map(getFullName);
  console.log(result);

  function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
  }
};
// funcMap();

// pop()
const funcPop = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let removed = fruits.pop();
  let result = removed;
  console.log(result);
};
// funcPop();

// push()
const funcPush = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.push("Kiwi", "Lemon", "Pineapple"); //adds items in the last
  let result = fruits;

  // "OR"

  let results = fruits.push("Guava"); //tells the last length after adding

  console.log(result);
  console.log(results);
};
// funcPush();

// reduce()
const funcReduce = () => {
  const numbers = [15.5, 2.3, 1.1, 4.7];

  let result = numbers.reduce(getSum, 0);
  console.log(result);

  function getSum(total, num) {
    return total + Math.round(num);
  }
};
// funcReduce();

// reduceRight()
const funcReduceRight = () => {
  const numbers = [2, 40, 30, 100];
  let result = numbers.reduceRight(getSum);
  console.log(result);

  function getSum(total, num) {
    return total - num;
  }
};
// funcReduceRight();

// reverse
const funcReverse = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let result = fruits.reverse();
  console.log(result);
};
// funcReverse();

// shift()
const funcShift = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // fruits.shift();
  // let result = fruits;
  // console.log(result);

  //"OR"

  let results = fruits.shift();
  console.log(results);
};
// funcShift();

// unshift
const funcUnshift = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.unshift("Lemon", "Pineapple");

  let result = fruits;
  console.log(result);
};
// funcUnshift();

// slice
const funcSlice = () => {
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits.slice(1, 4);

  let result = citrus;
  console.log(result);
};
// funcSlice();

// some()
const funcSome = () => {
  const ages = [3, 9, 18, 2];
  let result = ages.some(checkAdult);
  console.log(result);

  function checkAdult(age) {
    return age > 18;
  }
};
// funcSome();

// sort
const funcSort = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();
  // fruits.reverse();
  let result = fruits;
  console.log(result);
};
// funcSort();

// splice
const funcSplice = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  // At position 2, add 2 elements:
  // fruits.splice(2, 0, "Lemon", "Kiwi");

  // At position 2, remove 2 items:
  fruits.splice(2, 2);

  let result = fruits;
  console.log(result);
};
// funcSplice();

// toString
const funcToString = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let text = fruits.toString();
  let result = text;
  console.log(result);
};
// funcToString();

// valueOf
const funcValueOf = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const myArray = fruits.valueOf(); //or fruits;

  let result = myArray;
  console.log(result);
};
// funcValueOf();

// prototype
const funcPrototype = () => {
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", "blue");
  const myMother = new Person("Sally", "Rally", "green");

  Person.prototype.nationality = "English";

  let result =
    "My father is " +
    myFather.nationality +
    " and also " +
    "My mother is " +
    myMother.nationality;
  console.log(result);
};
// funcPrototype();
