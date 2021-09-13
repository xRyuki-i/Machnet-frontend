Week 1 Day 5 task

1. Write a program to display:
   h
   he
   hel
   hell
   hello
   hello!

Answer:

const word = "hello!"

for (let i=1; i<=word.length; i++ ) {
console.log(word.substr(0,i));
}

2. Write a program to display:
   hello!
   hello
   hell
   hel
   he
   h

Answer:

const word = "hello!"

for (let i=word.length; i>0; i-- ) {
console.log(word.substr(0,i));
}

3. Write a program to display:
   e
   cec
   aceca
   racecar

Answer:

const word = "racecar";
let j=0;

if ((word.length%2) === 0 ) {
j = 2;
} else {
j = 1;
}

midPoint = Math.round(word.length / 2);

for (let i=1; i<(midPoint+1); i++){
let spaces = '';
for (let k=0; k<(midPoint-i); k++) {
spaces+=" "
}

let characters= word.substr((midPoint-i),j);
let output = [spaces, characters]
console.log(output.join(''));
j+=2;

}

4. Create a function to display nth number in fibbonacci series (use of recursion is not allowed)

Answer:

const nthTerm = (a) => {
let fibonacci = [0,1];
let x = 0;
let y = 1;

for (let i=0; i<(a-2); i++) {
s = x + y;
x = y;
y = s;
fibonacci.push(s);
}

return fibonacci[a-1];
}

//Give the value of the nth-term to a
const a = 7;

console.log(nthTerm(a));

5. Write a program to manipulate following data
   const personalInforamtion = [
   { name: 'Ram', address: 'Kathmandu' },
   { name: 'Gita', address: 'Lalitpur' },
   { name: 'Sita', address: 'Kathmandu' },
   ];
   Create a function that takes personalInforamtion as a single argument to return {kathmanudu: [Ram, Sita], lalitpur: [Gita]}

Answer:

const personalInformation = [
{ name: 'Ram', address: 'Kathmandu' },
{ name: 'Gita', address: 'Lalitpur' },
{ name: 'Sita', address: 'Kathmandu' },
];

const task5 = (object) => {

    let address={
        kathmandu: [],
        lalitpur: []
    }

     object.map((obj)=>{
      const value = Object.values(obj);


      if (obj.address === "Kathmandu") {
        address["kathmandu"].push(value[0]);
      } else {
        address["lalitpur"].push(value[0]);
      }

    })

     return address;

}

console.log(task5(personalInformation));

6. From array:
   const details = [
   { name: 'Ram', age: 15 },
   { name: 'Shyam', age: 21 },
   { name: 'Hari', age: 12 },
   { name: 'Bharat', age: 18 },
   { name: 'Sita', age: 24 },
   ];
   obtain array of adults whose age is greater than 18

Answer:

const details = [
{ name: 'Ram', age: 15 },
{ name: 'Shyam', age: 21 },
{ name: 'Hari', age: 12 },
{ name: 'Bharat', age: 18 },
{ name: 'Sita', age: 24 },
];

     const adult = details.filter((obj)=> {
        const value = Object.values(obj);

        return value[1]>18;
     })

      console.log(adult);

7. Sort the array given in no 6) by age in ascending as well as descending order

Answer :

const details = [
{ name: 'Ram', age: 15 },
{ name: 'Shyam', age: 21 },
{ name: 'Hari', age: 12 },
{ name: 'Bharat', age: 18 },
{ name: 'Sita', age: 24 },
];

const ascending = details.sort((a,b) => Number(a.age)-Number(b.age));

const descending = details.sort((a,b) => Number(b.age)-Number(a.age));

console.log('Ascending : ', ascending);
console.log('Descending : ', descending);

8)From array:
const details = [
{
name: 'Ram',
pokemons: [
{
name: 'pikachu',
color: 'yellow',
},
{
name: 'charmendar',
color: 'red',
},
],
},
{
name: 'Shyam',
pokemons: [
{
name: 'Squirtel',
color: 'blue',
},
{
name: 'charmendar',
color: 'red',
},
{
name: 'bulbasaur',
color: 'green',
},
],
},
{
name: 'hari',
pokemons: [
{
name: 'bulbasaur',
color: 'green',
},
{
name: 'pikachu',
color: 'yellow',
},
],
},
{
name: 'gita',
pokemons: [
{
name: 'bulbasaur',
color: 'green',
},
{
name: 'squirtle',
color: 'blue',
},
],
},
];
Create an array of pokemon trainers that has only 2 pokemons and has a pokemon with yellow color

Answer:

const trainer = details.filter(obj => {

if (obj.pokemons.length === 2) {
return obj.pokemons.find(({ color }) => color === 'yellow');
}
})

console.log(JSON.stringify(trainer));

9. From array:
   const number = [1,2,3,4,5,6]
   create an array were even numbers are multiplied by 3 as shown in the following array:
   [1,6,3,12,5,18]

Answer:

const number = [1,2,3,4,5,6]

const tripleEven = number.map((num)=> {
if ((num % 2) === 0 ) {
num\*=3
}

return num;
})

console.log(tripleEven);

10. From Object:
    const detail = {name: "ram", address: "kathmandu", age: 15, email: "ram@gmail.com"}
    Create an array:
    [['name', 'address', 'age', 'email'],['ram', 'kathmandu', 15, 'ram@gmail.com']]

Answer :

const detail = {name: "ram", address: "kathmandu", age: 15, email: "ram@gmail.com"}

const keys = Object.keys(detail);
const values = Object.values(detail);

const arr = [keys, values]

console.log(arr);

Extra Task---

11. From the given string:
    const sentence = "the carrots on the table and the bananas on the table has dissappeared"
    create a function that takes sentence as a single argument to return { the: 4, carrots,1 on: 2, table:2, and:1, bananas:1 tab, has: 1, dissappeared:1}

Answer

{Static method}

const sentence = "the carrots on the table and the bananas on the table has dissappeared"

let the = 0;
let carrots = 0;
let on = 0;
let table = 0;
let and = 0;
let bananas = 0;
let has = 0;
let dissappeared = 0;

const wordCount = sentence => sentence
.split(' ')
.map((word) => {
if (word === "the") {
the+=1;
}
else if (word === "carrots") {
carrots += 1;
}
else if (word === "on") {
on += 1;
}
else if (word === "table") {
table += 1;
}
else if (word === "and") {
and += 1;
}
else if (word === "bananas") {
bananas += 1;
}
else if (word === "has") {
has += 1
} else {
dissappeared += 1
}
})

wordCount(sentence);

const count = {
the,
carrots,
and,
on,
table,
bananas,
dissappeared
}

console.log(count);

{dynamic method}

const sentence = "the carrots on the table and the bananas on the table has dissappeared"

const obj = {}

const result = sentence
.split(" ")
.map(word => {
if (obj.hasOwnProperty(word)) {
obj[word] = obj[word] + 1
} else {
obj[word] = 1;
}
})

console.log(obj);
