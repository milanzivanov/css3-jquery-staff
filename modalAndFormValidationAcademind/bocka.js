import fetch from 'node-fetch';
// or
// const fetch = require('node-fetch');

async function fetchAvatarUrl(userId) {
    
    // async await
    // const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const response = await fetch(`http://localhost:3000/comments/${userId}`);

    const data = await response.json();
    console.log(data);
    
    // response
    data
    return data.body

    // With Promise
    // return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //     .then(response => response.json())
    //     .then(data => data.username);
}

const result = fetchAvatarUrl(1);
result

// map
var animals = [
    {name: 'Misko', vrsta: 'pas'},
    {name: 'Mia', vrsta: 'macka'},
    {name: 'Bucko', vrsta: 'pas'},
    {name: 'Linda', vrsta: 'konj'}
];

// var names = animals.map(function(animal) {
//     return animal.name;
// });
var names = animals.map((animal) => animal.vrsta)
console.log(names);

var names = [];
for(let i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
console.log(names);


// TODO: promises by wes bos

function sleep(ms) {
    return new Promise((resolve, reject) => {
        if(ms <= 300) {

        }
        setTimeout(() => resolve(`Slept for ${ms}`), ms)
    });
}

sleep(500)
    .then((result) => {
        console.log(result);
        return sleep(1000);
    })
    .then((result) => {
        console.log(result);
        return sleep(1500);
    })
    .then((result) => {
        console.log(result);
        return sleep('i slept enough!!!');
    })

    // async await

    async function go() {
        await sleep(1000);
        const responese = await sleep(800);
        console.log(response);
    }