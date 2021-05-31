//
// typeで型を別定義できる。interfaceと似ている。
// 型定義するなら、保守性を考えると、今後はtypeの方が良いらしい。
//
type Unit = 'YEN' | 'USD' | 'EUR';
type TCurrency = {
    unit: Unit;
    amount: number;
};
interface ICurrency {
    unit: Unit;
    amount: number;
}

const price1: TCurrency = {unit: 'USD', amount: 100};
const price2: ICurrency = {unit: 'YEN', amount: 300};
console.log(price1, price2);

// typeを拡張してみる。interfaceのextendsと同じような感じ。
type TPayment = TCurrency & {
    data: Date
};
const price3: TPayment = {unit: 'USD', amount: 100, data: new Date('2021-03-03T12:00:00+0900')}
console.log(price3)

//
// null安全性を保証する。tsconfigに、"strictNullChecks": trueが必要。
//
// const productName: string = null        // コンパイルエラー
// const productPrice: number = undefined  // コンパイルエラー

// 意図的にnullを許容する場合は、共用体型による型定義を行う。
const productName: string | null = null;
console.log(productName);

//
// typeof 演算子で既存の型をそのまま利用する
//
{
    const numArr = [1, 3, 5];
    console.log(typeof numArr);
    type newNumArr = typeof numArr;

    const prices: newNumArr = [400, 900];
    console.log(prices);
    // const pricesError: newNumArr = ['AAA', 'BBBB'];  // コンパイルエラー
}

//
// 日時指定で便利なテンプレートリテラル型
//
type format = `${number}-${number}-${number}`;
const currentDate: format = '2021-12-12';
// const tomorrowDate: format = '2021-12-Mon'; // コンパイルエラー