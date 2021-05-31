//
// メンバ変数の定義を一括で変更する。Readonly, Required, Partial
//
{
    var readProduct = { name: 'Printer', price: 10000, stock: false };
}
//
// メンバ変数の一部を抽出して再定義
// どちらも、name, stockメンバ変数が定義された型を表す。
{
}
//
// 文字列リテラルなどの列挙的な型を再定義する。
//
{
    // const test: nonNull = null;  // コンパイルエラー
}
//
// 特殊な型
//
// Record<K, T> Kの要素をキー、値の型をTとした定義を作成。
{
    var product_1 = { name: 'x', feature: 'x', remark: 'x' };
}
// 大文字、小文字に変換
{
}
