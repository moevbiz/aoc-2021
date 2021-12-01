import * as fs from "fs";

let input = fs.readFileSync('./input', 'utf8').split('\n').map(n => parseInt(n));
input = input.filter((curr, i) => curr > input[i-1]).length;

console.log(input);