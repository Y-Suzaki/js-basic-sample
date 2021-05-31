// 関数オブジェクトを戻り値にする
const greeter = (message) => {
    return () => {
        console.log(message)
    }
}
const test = greeter('Hello.')
test()

// アロー関数では、return文のみの場合省略できる。
const greeter2 = (message) => () => console.log(message)
const test2 = greeter2('World.')
test2()
