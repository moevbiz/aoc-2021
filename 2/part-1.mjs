import * as fs from "fs";

let pos = {x: 0, y: 0};

let input = fs.readFileSync('./input', 'utf8').split('\n').map(n => n.split(' '));

input.forEach(i => {
    let n = parseInt(i[1]);
    if (i[0] == 'up') pos.y -= n;
    if (i[0] == 'down') pos.y += n;
    if (i[0] == 'forward') pos.x += n;
});

console.log(pos.x * pos.y);