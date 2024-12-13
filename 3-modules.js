// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names') // Importing the names module
const sayHi = require('./5-utils') // Importing the utils module
const data = require('./6-alternative-flavor') // Importing the alternative flavor module

require('./7-mind-grenade') // to run without assgin a variable

sayHi('loraine')
sayHi(names.jeremy)
sayHi(names.kieth)

// run node 3-modules.js in the terminal to see the output