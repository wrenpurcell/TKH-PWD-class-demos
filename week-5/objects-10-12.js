//Objects
// { Key: Value }

// lists of keys and corresponding values

// Different way of creating objects


//Object constructor => creates a an objet wrapper for the given value
const myObject = new Object();

//Object literal syntax aka object initializer
// create Json objects
const myObject2 = {};


// Functions?
//Constructor Function


const Classroom = function (name, numOfStudents) {
  this.name = name;
  this.numOfStudents = numOfStudents;
}

const TKH = new Classroom('2021-Cohort', 22)

console.log(TKH)


const Films = function (name, yearOfRelease) {
  this.name = name;
  this.yearOfRelease = yearOfRelease;
}

const lotr = new Films('Return of The King', 2004)
console.log(lotr)


// Object.create

const Person = {
  type: 'Human',
  displayType: function () {
    console.log(this.type);
  }
}
// . like a path
const person1 = Object.create(Person)
person1.type = 'SuperHuman';
person1.displayType();