const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first} and ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            // console.log(result)
            console.log('done with this task')
        })
    })
})

console.log('starting next task')


// to see result run node 11-fs-async.js in terminal to see result... FS there is a existing file there so change the writeFile to see seomthing...