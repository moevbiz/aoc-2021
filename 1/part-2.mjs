import * as fs from "fs";

let input = fs.readFileSync('./input', 'utf8').split('\n').map(n => parseInt(n));

// needed this part to help think
let inc = 0;

for (let i = 0; i < input.length; i++) {
    let prev = input[i-1] + input [i] + input[i+1];
    let curr = input[i] + input[i+1] + input[i+2];

    if (curr > prev) inc++
}

console.log(inc);

// alt solution
input = input.map((curr, i) => curr + input[i+1] + input[i+2]);
console.log(input.filter((curr, i) => curr > input[i-1]).length);