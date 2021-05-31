//
// シンプルなfunction定義
//
function add(num1 , num2) {
    return num1 + num2
}

function checkParameter(parameter) {
    return parameter.length <= 10;
}

const print = function (value) {
    console.log(value)
};

console.log(add(10, 100));
console.log(checkParameter("aaaaaaaaaaaaaaaaaaaaaa"));
print("Print Function.")

// デフォルト引数を使った定義
const search = (name, prefix='A-') => {
    return prefix + name
}
console.log(search('Tanaka'))

// 可変長引数を使った定義
const searchAll = (name, ...args) => {
    console.log(name, args)
}
searchAll('Hayashi', 'AAA', 'BBB')

//
// オブジェクトのプロパティとして関数を定義
//
const foo = {
    name: 'name',
    print(value) {
        console.log(value)
    }
}
foo.print('オブジェクトのプロパティとして関数を定義')

//
// lambdaを使った定義
//
const colors = ["red", "green", "blue"];
const newColor = colors.filter((value) => value.length >= 4);
console.log(newColor);

//
// substitute a functional definition to the variables.
//
let sum = (n) => {
  let sum = 1;
  for(let i = 0; i < n; i++) {
      sum *= 2
  }
  return sum;
};

console.log(sum(5));
console.log(sum.name)