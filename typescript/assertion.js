//
// 未定義の型が返された場合、型定義を強制（as User）することができる。
//
{
    // 下記のように実行時例外が発生する可能性があるため、最終手段として利用する。
    try {
        var str_1 = "{ \"username\": \"patty\", \"town\": \"Maple Town\" }";
        var data = JSON.parse(str_1);
        var user = data;
        console.log(user.address.town); // TypeError: Cannot read property 'town' of undefined
    }
    catch (e) {
        console.log(e);
    }
}
//
// 型ガードを使うと、安全な状態で型を指定することができる。
//
{
    // プリミティブ型の場合
    var users_1 = 'tanaka,Yamada,Hayashi';
    if (typeof users_1 === "string") {
        // string型が保証されているため、安全に使える＆IDEでの補完も効く。
        console.log(users_1.split(','));
    }
    // console.log(users.split(','));   // コンパイルエラー
    // classの場合
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var Product_1 = /** @class */ (function () {
        function Product() {
        }
        return Product;
    }());
    var print_1 = function (content) {
        if (content instanceof Product_1) {
            console.log(content.name, content.price);
        }
        else {
            console.log(content.name);
            // console.log(content.name, content.price);    // コンパイルエラー
        }
    };
}
