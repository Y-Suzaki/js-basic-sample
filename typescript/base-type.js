// 型定義
var num = 100;
var str = 'Tanaka';
var ret = false;
// 以下はコンパイルエラーとなる
// num = 'huhuh'
var numArray = [1, 3, 5];
var users = {
    name: 'Tanaka', age: 90
};
console.log('Type Script.');
console.log(num, str, ret);
console.log(numArray, users);
var product = {
    name: 'RC-009',
    price: 1200
};
console.log(product);
//
// Enumの定義
//
var Pet;
(function (Pet) {
    Pet[Pet["Cat"] = 0] = "Cat";
    Pet[Pet["Dog"] = 1] = "Dog";
    Pet[Pet["Rabbit"] = 2] = "Rabbit";
})(Pet || (Pet = {}));
console.log(Pet.Cat, Pet.Dog, Pet.Rabbit);
var animal = Pet.Dog;
console.log(animal);
// 文字列型で定義
var Pet2;
(function (Pet2) {
    Pet2["Cat"] = "Cat";
    Pet2["Dog"] = "Dog";
    Pet2["Rabbit"] = "Rabbit";
})(Pet2 || (Pet2 = {}));
var animal2 = Pet2.Dog;
// animal2 = 'pop' // コンパイルエラー
console.log(animal2);
// 文字列リテラルで定義することで、Enumよりもシンプルにできる
var Pet3 = 'Cat';
Pet3 = 'Dog';
// Pet3 = 'Snake' // コンパイルエラー
console.log(Pet3);
//
// タブルの定義
//
var productTuple = [1, 'Tablet', false];
console.log(productTuple);
//
// never型、型には文字列リテラルを利用し、インプットを制限している
//
var funcNever = function (color) {
    switch (color) {
        case 'Red':
            console.log(color);
            break;
        case 'Blue':
            break;
        case 'Green':
            break;
        default: {
            // neverは何も代入できない型である。
            // case文に定義が足りない場合、コンパイルエラー。
            var check = color;
        }
    }
};
funcNever('Red');
