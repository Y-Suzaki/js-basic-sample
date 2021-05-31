var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//
// extendsで受け入れる型を制限することができる。
// UはTと同じか拡張したものでなければならない。
//
var override = function (obj1, obj2) { return (__assign(__assign({}, obj1), obj2)); };
override({ a: 1 }, { a: 24, b: 8 }); // { a: 24, b: 8 }
// override({ a: 2 }, { x: 73 }); // compile error!
// 参考演算子とextendsを組み合わせてみる。
//
// マッチング中に取得したキーワードを使いたい場合、inferキーワードを使う。
// TがArrayの場合、要素の型をinfer Uで取得し、型定義として使っている。
//
{
    var num_1 = 5;
    var arr = [3, 6, 9];
}
//
// テンプレートリテラルを使って、SQL文にも型を定義することができる。
//
// constで定数定義になる。
var tables = ['users', 'posts', 'comments'];
var createQuery = function (table, limit) {
    return limit ? "SELECT * FROM " + table + " LIMIT " + limit : "SELECT * FROM " + table;
};
console.log(createQuery('users', 20));
console.log(createQuery('posts'));
var q1 = 'SELECT * FROM users';
var q2 = 'SELECT id, body, createdAt FROM posts';
var q3 = 'SELECT userId, postId FROM comments';
