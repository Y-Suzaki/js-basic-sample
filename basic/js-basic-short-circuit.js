//
// ショートサーキット評価
//
// || では、最初にtureになった時点で評価が終わる、（その時点での値が代入される）
const hello = undefined || null || 0 || NaN || '' || 'Hello!';
console.log(hello)

// && では、最後falseになった時点で評価が終わる。
const chao = ' ' && 100 && [] && {} && 'Chao!';
console.log(chao)

true && console.log(' 1.', hello); // 1. Hello!
false && console.log(' 2.', hello); // (no output)
true || console.log(' 3.', chao); // (no output)
false || console.log(' 4.', chao); // 4. Chao!

//
// ショートサーキットより今時な記載方法
//
// ?? Nullish Coalescing 左辺がnullまたはundefinedの時に、右辺が評価される。
// ?. Optional Chaining チェーンの途中がundefinedでも最後まで評価した結果を返す。
const users = [
    {
        name: 'Patty Rabbit',
        address: { town: 'Maple Town', }, },
    {
        name: 'Rolley Cocker',
        address: {},
    },
    null,
];

for (let u of users) {
    // uがnullの場合（index:2）の場合のみ、(Somebody)が代入される。
    const user = u ?? { name: '(Somebody)' };
    // 最初の要素（index:0）の場合のみ、town情報が設定される。その他は、??評価時にundefinedになるため、(Somebody)が代入される。
    const town = user?.address?.town ?? '(Somewhere)';
    console.log(`${user.name} lives in ${town}`);
}
