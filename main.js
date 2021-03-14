/*console.log('Hello World');
console.error('This is an error')
console.warn('This is a warning')*/

/*var, let, const
let age = 30;
age = 31;

let score;
score = 10;

console.log(age);
console.log(score);*/

/*const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;*/

        /*const name = 'John';
        const age = 30;
        //concatenation
        console.log('My name is ' + name + ' and I am ' + age);*/

//Template String
    /*const hello = `My name is ${name} and I am ${age}`;
    console.log(hello);

    const s = 'tachnology, computers, it, code';
    console.log(s.substring(0, 5).toUpperCase());
    console.log(s.split(', '))*/

//Arrays - variables that hold multiples values
    /*const fruits = ['Apples', 'Oranges', 'Pears'];

    fruits[3] = 'Grapes';
    fruits.push('mangos');
    fruits.unshift('strawberries');
    fruits.pop();
    console.log(Array.isArray(fruits));
    console.log(fruits.indexOf('Oranges'));

    console.log(fruits);*/


    /*const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        hobbies: ['music', 'biking', 'fortnite'],
        address: {
            street: '50 main street',
            city: 'Boston',
            state: 'MA'
        }

    }

    console.log(person.address.city);

    const {firstName, lastName} = person;
    console.log(firstName);

    person.email = 'John@gmail.com';
    console.log(person);*/


/*const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false,
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);*/

//For
   /* for(let i = 0; i <= 10; i++){
        console.log(`For loop number: ${i}`);
    }*/

//While
    /*let i = 0;
    while(i < 10){
        console.log(`While loop number: ${i}`);
        i++;
    }*/

/*/forEach, map, filter
/const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);*/



/*const x = 8;

const color = 'green';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}*/

/*function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(addNums(5,5));*/

//Constructor function
    /*function Person(firstName, lastName, dob){
        this.firstName = firstName;;
        this.lastName = lastName;
        this.dob = new Date(dob);
        
    
    }

    Person.prototype.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }*/

//class
    /*class Person{
        constructor(firstName, lastName, dob){
            this.firstName = firstName;;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }

        getBirthYear(){
            return this.dob.getFullYear();
        }

        getFullName(){
            return `${this.firstName} ${this.lastName}`;
    }
        }


    //Instantiate object
    const person1 = new Person('john', 'doe', '4-2-1980');


    console.log(person1.getBirthYear());
    console.log(person1);*/



//Single element selector
    /*console.log(document.getElementById('my-form'));
    console.log(document.querySelector('.container'));*/

//Multiple element selector
//console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
    /*ul.firstElementChild.textContent = 'Hello';
    ul.children[1].innerText = 'Brad';
    ul.lastElementChild.innerHTML = '<h1>Hello</h1>';*/

    /*const btn = document.querySelector('.btn');

    btn.addEventListener('mouseout', (e) => {
        e.preventDefault();
        document.querySelector('#my-form')
        .style.background = '#ccc';

        document.querySelector('body').classList.add('bg-dark');
        document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    });*/


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        
        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        ///clear fields
        nameInput.value = '';
        emailInput.value = '';
        
    }
}