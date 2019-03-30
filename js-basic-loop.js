//
// Array
//
let animal = ["cat", "dog", "fox"];

// for
for(let i = 0; i < animal.length; i++) {
    console.log(animal[i], i);
}

// add item in the array.
animal.push("panda");

// foreach
animal.forEach((value, index) => console.log(value, index));

// while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//
// Hash
//
let person={"name": "tanaka", "age": 30};

// for in
for(let key in person) {
    console.log(key, person[key])
}