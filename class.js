// ES6 : ECMAScript 2015 Class

class myClass {
  constructor(name) {
    this.myname = name
  }

  fullName(greeting) {
    return greeting + "My name's " + this.myname
  }

  static hello(name) {
    return name !== undefined ? 'Hi ' + name : 'Hi'
  }
}

let person = new myClass('Nong Maew')

console.log(person.fullName('Hey Yo!! '))

// Static Method
console.log(myClass.hello())
console.log(myClass.hello('Riri'))
