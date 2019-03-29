let animal = ["cat", "dog", "fox"];

// for
for(let i = 0; i < animal.length; i++) {
    console.log(animal[i], i);
}

// add item in the array.
animal.push("panda");

// foreach
animal.forEach((value, index) => console.log(value, index));
