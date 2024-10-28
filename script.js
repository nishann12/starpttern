
const fs = require('fs')
let count=0
const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1),i=0,numberOfNewLine=0,stdinBuffer = Buffer.alloc(1),inc=0;
    buf.fill(0);
    while ((buf[0] - 10 && buf[0] - 13)) {
       
        s += buf, fs.readSync(0, buf, 0, 1, 0);
        if(buf[0] - 10===0 || buf[0] - 13===0){
            i++;
            // console.log('first',i)
        }
    }
    fs.readSync(0,stdinBuffer,0,1,null);
    count++;
    return s.slice(1).replace(/^\n/, '');
};
// const result = prompt('Input something: ');
// const result2 = prompt('Input something: ');
// const result3 = prompt('Input something: ');
// console.log('Your input was: ' + result);
// console.log('Your input was: ' + result2);
// console.log('Your input was: ' + result3);


console.log("       D");
console.log("==============");
for (let i = 6; i >= 1; i--) {
    console.log(" ".repeat(6 - 1) + "*".repeat(i));
}
