const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
writeFileSync('./content/result-sync.txt', `Here is the result :  ${first}, ${second}`, { flag: 'a' })

console.log('done with this task')
console.log('starting the next one')
// console.log(first, second)

// run 10-fs-sync.js in terminal to see result.... FS there is a existing file there so change the writeFile to see seomthing...