import * as fs from "fs";

let input = fs.readFileSync('./input', 'utf8').trim().split('\n');

let numbers = input.map(number => {
    return number.split('');
})

const getOxy = numbers => {
    let n = 0;
    while (numbers.length > 1) {
        let transposedBitMatrix = transpose(numbers);
        let checksum = transposedBitMatrix[n].reduce((a, b) => parseInt(a) + parseInt(b), 0);
        let mostOccurr = 0;
        if (checksum >= transposedBitMatrix[n].length / 2) mostOccurr = 1;
        
        numbers = numbers.filter(number => {
            if (parseInt(number[n]) == mostOccurr) {
                return number;
            }
        })
        n++;
    }
    return parseInt(numbers[0].join(''), 2);
}

// screw it
const getCO2 = numbers => {
    let n = 0;
    while (numbers.length > 1) {
        let transposedBitMatrix = transpose(numbers);
        let checksum = transposedBitMatrix[n].reduce((a, b) => parseInt(a) + parseInt(b), 0);
        let leastOccurr = 0;
        if (checksum < transposedBitMatrix[n].length / 2) leastOccurr = 1;
        
        numbers = numbers.filter(number => {
            if (parseInt(number[n]) == leastOccurr) {
                return number;
            }
        })
        n++;
    }
    return parseInt(numbers[0].join(''), 2);
}

console.log(getOxy(numbers)*getCO2(numbers));

function transpose(matrix) {
    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
}

