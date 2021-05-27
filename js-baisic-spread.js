// プロパティ名のショートハンド
{
    const name = 'tanaka'
    const age = 90
    const address = 'Tokyo'
    const user = {name, age, address}
    console.log(user)
}

// 分割代入、まとめて代入するよ
{
    const [name, age] = ['tanaka', 100]
    console.log(name, age)

    const product = {no: 200, price: 9000, code: 'K99'}
    const {no, price} = product
    console.log(no, price)
}

// 分割代入で、別の変数に代入する
// プロパティ名dataが一致し、別変数名として定義されているproductsに代入される。
{
    const response = {
        data: [
            {name: 'name1', price: 100},
            {name: 'name2', price: 200},
            {name: 'name3', price: 300}
        ]
    }
    const {data: products} = response
    console.log(products)
}

// スプレッド構文（配列やコレクションの結合）
{
    const color = ['red', 'blue']
    const newColors = [...color, 'white']
    console.log(newColors)

    // 同じキー名がある場合は後勝ち
    const product = {no: 200, price: 9000, code: 'K99'}
    const newProduct = {...product, price: 12345, num:90}
    console.log(newProduct)
}