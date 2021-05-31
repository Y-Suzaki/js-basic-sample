var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
{
    // {
    //   "compilerOptions": {
    //     "noImplicitAny": true
    //   }
    // }
    // 引数の型定義がないとコンパイルエラー
    function add(n, m) {
        return n + m;
    }
    console.log(add(3, 9));
}
{
    var add_1 = function (n, m) {
        return n + m;
    };
    console.log(add_1(5, 9));
}
// 戻り値がないものはvoid
{
    var print_1 = (function (value) {
        console.log(value);
    });
    print_1('Hello.');
}
//
// interfaceとして関数の型を定義
//
{
    var add_2 = function (n, m) {
        return n + m;
    };
    console.log(add_2(10, 30));
}
//
// ジェネリクス
//
{
    var toArray = function (n, m) {
        return [n, m];
    };
    console.log(toArray('AA', 'BB'));
    console.log(toArray(8, 22));
    // 以下はコンパイルエラー
    // console.log(toArray(1, 'tata'))
    var toArray2 = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __spreadArray([], args);
    };
    console.log(toArray2(1, 2, 3, 4, 5));
}
