// GLOBALS - NO WINDOW !!!!

// __dirname - path to current directory
// __fileName - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)

setInterval(() => {
    console.log('hello world')
}, 1000)


//RUN node 2-globals.js in terminal to see the output
