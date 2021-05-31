// 関数型
// 副作用がない（イミュータブル）
const range = (start, end) => [...new Array(end - start ).keys()].map((n) => n + start);

console.log(range(1, 20))
console.log(range(1, 20).filter((n) => n % 5 === 0))

