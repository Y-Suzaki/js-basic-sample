//
// class
//
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address
    }
    print() {
        console.log(this)
    }
    isAdult() {
        return this.age >= 20;
    }
}

let person1 = new Person("name", 30, "tokyo");
person1.print();

if (person1.isAdult()) {
    console.log("Adult");
} else {
    console.log("Child")
}
