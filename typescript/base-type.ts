// 型定義
let num: Number = 100
const str: String = 'Tanaka'
const ret: Boolean = false

// 以下はコンパイルエラーとなる
// num = 'huhuh'

const numArray: Number[] = [1, 3, 5];
const users: {name: String, age: Number} = {
    name: 'Tanaka', age: 90
};

console.log('Type Script.');
console.log(num, str, ret)
console.log(numArray, users)

//
// 型定義はinterfaceぜ事前定義できる
//
interface Product {
    readonly name: String;  // 書き換え不可
    price: Number;
    remark?: String // オプション
}

const product: Product = {
    name: 'RC-009',
    price: 1200
}

console.log(product)

//
// Enumの定義
//
enum Pet { Cat, Dog, Rabbit }
console.log( Pet.Cat, Pet.Dog, Pet.Rabbit);

let animal: Pet = Pet.Dog
console.log(animal)

// 文字列型で定義
enum Pet2 { Cat = 'Cat', Dog = 'Dog', Rabbit = 'Rabbit' }
let animal2: Pet2 = Pet2.Dog
// animal2 = 'pop' // コンパイルエラー
console.log(animal2)

// 文字列リテラルで定義することで、Enumよりもシンプルにできる
let Pet3: 'Cat' | 'Dog' | 'Rabbit' = 'Cat';
Pet3 = 'Dog'
// Pet3 = 'Snake' // コンパイルエラー
console.log(Pet3)

//
// タブルの定義
//
const productTuple: [number, string, boolean] = [1, 'Tablet', false]
console.log(productTuple)

//
// never型、型には文字列リテラルを利用し、インプットを制限している
//
const funcNever = (color: 'Red' | 'Blue' | 'Green') => {
    switch (color) {
        case 'Red':
            console.log(color)
            break;
        case 'Blue':
            break;
        case 'Green':
            break;
        default: {
            // neverは何も代入できない型である。
            // case文に定義が足りない場合、コンパイルエラー。
            const check: never = color
        }
    }
}
funcNever('Red')