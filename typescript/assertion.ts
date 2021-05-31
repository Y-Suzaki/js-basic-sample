//
// 未定義の型が返された場合、型定義を強制（as User）することができる。
//
{
    // 下記のように実行時例外が発生する可能性があるため、最終手段として利用する。
    try {
        type User = { username: string; address: { zipcode: string; town: string } };
        const str = `{ "username": "patty", "town": "Maple Town" }`;
        const data: unknown = JSON.parse(str);
        const user = data as User;
        console.log(user.address.town); // TypeError: Cannot read property 'town' of undefined
    } catch (e) {
        console.log(e);
    }
}

//
// 型ガードを使うと、安全な状態で型を指定することができる。
//
{
    // プリミティブ型の場合
    const users: unknown = 'tanaka,Yamada,Hayashi';
    if (typeof users === "string") {
        // string型が保証されているため、安全に使える＆IDEでの補完も効く。
        console.log(users.split(','));
    }
    // console.log(users.split(','));   // コンパイルエラー

    // classの場合
    class User {
        name: string;
    }
    class Product {
        name: string;
        price: number;
    }
    const print = (content: User | Product): void => {
        if (content instanceof Product) {
            console.log(content.name, content.price);
        }  else {
            console.log(content.name);
            // console.log(content.name, content.price);    // コンパイルエラー
        }
    }
}