//
// シンプルなclass定義
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

// Allow関数を使った定義
class Animal {
    constructor(name) {
        this.name = name
    }
    print = () => {
        console.log('Animal::print()')
    }
}

let person1 = new Person("name", 30, "tokyo");
person1.print();

if (person1.isAdult()) {
    console.log("Adult");
} else {
    console.log("Child")
}

let animal1 = new Animal('Cat')
animal1.print()

// 型を出力してみる（function と出力）
console.log(typeof Animal)
console.log(animal1.__proto__)
