console.log("Hi Johan from Node")

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt-flavor')
console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)



