var price1 = { unit: 'USD', amount: 100 };
var price2 = { unit: 'YEN', amount: 300 };
console.log(price1, price2);
var price3 = { unit: 'USD', amount: 100, data: new Date('2021-03-03T12:00:00+0900') };
console.log(price3);
//
// null安全性を保証する。tsconfigに、"strictNullChecks": trueが必要。
//
// const productName: string = null        // コンパイルエラー
// const productPrice: number = undefined  // コンパイルエラー
// 意図的にnullを許容する場合は、共用体型による型定義を行う。
var productName = null;
console.log(productName);
//
// typeof 演算子で既存の型をそのまま利用する
//
{
    var numArr = [1, 3, 5];
    console.log(typeof numArr);
    var prices = [400, 900];
    console.log(prices);
    // const pricesError: newNumArr = ['AAA', 'BBBB'];  // コンパイルエラー
}
var currentDate = '2021-12-12';
// const tomorrowDate: format = '2021-12-Mon'; // コンパイルエラー
