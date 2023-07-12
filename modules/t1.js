const fs = require('node:fs');


// using sync functions
// const syncData = fs.readFileSync('./docs/read.txt' , 'utf-8');

// console.log(syncData)


// using async functions
const asyncData = fs.readFile('./docs/read.txt', 'utf-8' , (err, data) => {
    console.log(data);
});

 


