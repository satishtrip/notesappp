const appp = require('./nts.js')

const yargs = require('yargs')
const chalk = require('chalk')
const validator = require('validator')

const prod = appp()

//console.log(process.argv)


yargs.command({
    command: 'insert',
    describe: 'Inse a new node',
    handler: function () {
        console.log('Adding a new note')
    }

})
yargs.command({
    command: 'list',
    describe: 'listing a new node',
    handler: function () {
        console.log('lsiting a new note')
    }

})

yargs.command({
    command: 'read',
    describe: 'rwad a new node',
    handler: function () {
        console.log('read a new note')
    }

})

console.log(yargs.argv)
// console.log(prod)
// console.log("function has been called")
// console.log(validator.isEmail('satishl.com'))
// console.log(validator.isURL('https://nodejs.org/en/'))
// const redmsg = chalk.green.underline.bold('hey')
// console.log(redmsg)
// const msg = chalk.red.inverse.bold('brother')
// console.log(msg)

// const command = process.argv[2]
// console.log(process.argv)

// if (command == 'add') {
//     console.log('Adding note')
// }else if (command =='remove'){
//     console.log("Removing node")
// }

// console.log(process.argv[1])