import * as fs from "fs";

let input = fs.readFileSync('./input', 'utf8').trim().split('\n');

let gamma = [];
let epsilon = [];

input = input.map(i => {
    return i.split('');
})

input = transpose(input);

input.forEach(i => {
    let checksum = i.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    if (checksum >= i.length / 2) {
        gamma.push(1);
        epsilon.push(0);
    } else {
        gamma.push(0);
        epsilon.push(1);
    }
})

let gRate = parseInt(gamma.join(''),2)
let eRate = parseInt(epsilon.join(''),2)

console.log(gRate*eRate);

function transpose(matrix) {
    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
}

