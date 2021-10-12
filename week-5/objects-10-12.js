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

// const classroom = new Object();

// classroom.name = 'TKH 2021';

// classroom.campus = 'Remote';





//Bracket Notation

// classroom['name'] = 'peeps';
// classroom['campus'] = 'bx';
// console.log(classroom)


// console.log(classroom['name']);

// // saved the key/value to the variable below
// const location = 'campus';

// console.log(classroom[location]);




// Delete properties inside Objects

// const classroom = { name: 'TKH 2021', campus: "BX", size: 22 };

// delete classroom.campus;
// console.log(classroom);

//loop over values in an object
const car = {
  make: 'Toyota',
  model: '4Runner',
  year: '2021'
}

const showProps = function (obj, objName) {
  for (let key in obj) {
    console.log(`${objName}.${key} = ${obj[key]}`)
  }
}

showProps(car, 'Car')
