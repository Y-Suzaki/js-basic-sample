// クロージャ
// count変数を参照しているincrement()関数がクロージャとして返される。
// 外のスコープのinc変数から参照されているため、結果としてcount変数の参照も切れない。
// 状態を１つ、関数を１つだけ持つのであれば、classでも実現はできるが、クロージャの方がシンプル。
const counter = () => {
    let count = 0;
    const increment = () => {
        return count += 1
    };
    return increment;
}
const inc = counter()
console.log(inc())
console.log(inc())

// クロージャ（より短く書いたバージョン）
const counter2 = (count = 0) => () => count += 1
const inc2 = counter2()
console.log(inc2())
console.log(inc2())
