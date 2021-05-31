// this の使い方
const print = () => {
    console.log(this)
}

const print2 = function () {
    console.log(this)
}

print()
print.call({'test': 'pp'})
print2.call({'test': 'pp'})

// fooオブジェクトがthisとして渡されるパターン
const foo = {
    name: 'Foo Object',
    dump() {console.log(this); },
};
foo.dump(); // { name: 'Foo Object', dump: [Function: dump] }

// 以下のthisはglobalオブジェクトを参照
const test1 = function () {
    console.log(this)
}
test1()

// 以下のthisは、test2()のプロトタイプオブジェクトがコピーされて渡される。
const test2 = function () {
    console.log(this)
}
const t = new test2()

// global領域の汚染は簡単にできてしまう
// new で生成していないため、thisにはglobalオブジェクトが渡される
const Person = function (name) {
    this.name = name;
    console.log(this)
    return this;
};
Person(' somebody');

// classは、new無しでは生成できない言語仕様になっている。
// TypeError: Class constructor Animal cannot be invoked without 'new'
class Animal {
    print = () => {
        console.log('OK')
    }
}
try {
    Animal();
} catch (e) {
    console.log(e)
}

new Animal().print()

//
// class
//
// class内でのthisの間違った使用方法
class PersonSan {
    constructor( name) {
        this.name = name;
    }
    greet() {
        const doIt = function () {
            // 以下のthisはglobalオブジェクトが渡される＆class内で禁止されているため、undefinedになる。
            console.log( ` Hi, I'm ${this.name} `);
        };
        doIt();
    }
}
try {
    const minky = new PersonSan(' Momo');
    minky.greet(); // TypeError: Cannot read property 'name' of undefined
} catch (e) {
    console.log(e)
}

// class内のfunctionでthisを使いたい時は、アロー関数式で定義しましょう。
class PersonArrow {
    constructor(name) {
        this.name = name
    }

    test() {
        console.log( ` Hi, I'm ${this.name} `);
    }

    greet() {
        // アロー関数式内のthisは、関数の外のスコープのthisがそのまま使われる。
        const doIt = () => {
            console.log( ` Hi, I'm ${this.name} `);
        }
        doIt()
    }
}

const arrow = new PersonArrow('Test')
arrow.greet()
arrow.test()
