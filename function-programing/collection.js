const arr = [1, 2, 3 ,4, 5, 6, 7, 8, 9]
console.log(arr.map((n) => n ** 2))
console.log(arr.filter((n) => n % 2 === 0))

// 最初の要素を返す
console.log(arr.find((n) => n > 2))

// 最初のIndexを返す
console.log(arr.findIndex((n) => n > 5))

// 全ての要素を条件を満たすかどうか
console.log(arr.every((n) => n !== 0))

// 与えられた要素が１つでも条件を満たすかどうか
console.log(arr.some((n) => n % 13 === 0))

console.log('与えられた要素が含まれるかどうか')
console.log(arr.includes(8))
console.log(arr.includes(90))

// 戻り値を伴わないforEachは、関数型プログラミングとしては多用しない
arr.forEach((n) => console.log(n))

// reduce 第一引数のnには前回の実行結果、第二引数のmには各要素が入る。結果は1つだけ返る。(45が返る)
console.log(arr.reduce((ret, entry) => ret + entry))

// sort（リバースソート）
// 一旦コピーすると良いかも
console.log([...arr].sort((n, m) => n > m ? -1 : 1))
console.log(arr)
// slice()も良い。引数を省略して使うと、全体を社ローコピーする
console.log(arr.slice().sort((n, m) => n > m ? -1 : 1))
console.log(arr)

// sortは破壊的メソッドなので注意すること
console.log(arr.sort((n, m) => n > m ? -1 : 1))
console.log(arr)

// オブジェクトの繰り返し、歴史的に経緯でプロトタイプメソッドではない。
objects = {
    'Tanaka': 90,
    'Sato': 18,
    'Suzuki': 50
}
Object.keys(objects)
Object.values(objects)
Object.entries(objects)
