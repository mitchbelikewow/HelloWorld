const name="john";
console.log(typeof name);
const age=30;
//concatenation
console.log(`my name is ${name} and i am ${age}`);
//array
const s="technology, computers, it, code";
console.log(s.split(', '));
//arrays
const numbers=new Array(1,2,3,4,5,6);
const fruits= ["apples","oranges","pears"];
console.log(fruits[1]);
console.log(fruits.length);
fruits.push("mangos");
fruits.unshift("strawberries");
console.log(fruits);
console.log(fruits.indexOf("mangos"))
//objects
const person={
    firstname: "jhpn",
    lastname: "doe",
    age:30,
    hobbies:["music","Movies","sports"],
    address:{
        street:"50 main",
        city:"boston",
        state:"ma"
    }
}
console.log(person);
console.log(person.lastname,person.firstname);
console.log(person.hobbies[1]);

person.email="@gmail.com";



const todos=[
    {
        id:1,
        text:"meet bossw",
        isCompletes:true
    },
    {
        id:2,
        text:"trash",
        isCompletes:false,
    },
    {
        id:3,
        text:"eat ass",
        isCompletes:true
    }
];
console.log(todos[1].text);


//json

const todojson=JSON.stringify(todos);
console.log(todojson);


//loops
//for


//foreach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todotext =todos.map(function(todo) {
    return todo.text;
});






const todoComp=todos.filter(function(todo){
    return todo.isCompletes===true;
}).map(function(todo){
    return todo.text;
});
console.log(todoComp);


//ternary ?. ?=then
const x=10;
const color=x>10 ? "red": "blue";


//function
function addnums(num1=1, num2=1){
    return(num1+num2);

}

console.log(addnums(1,2));



//arrow function
const addnums=(num1=1, num2=1)=>num1+num2;
console.log(addnums(5,5));

