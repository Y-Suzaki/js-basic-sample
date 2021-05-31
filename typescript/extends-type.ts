//
// extendsで受け入れる型を制限することができる。
// UはTと同じか拡張したものでなければならない。
//
const override = <T, U extends T>( obj1: T, obj2: U): T & U => ({ ...obj1, ...obj2, });
override({ a: 1 }, { a: 24, b: 8 }); // { a: 24, b: 8 }
// override({ a: 2 }, { x: 73 }); // compile error!

// 参考演算子とextendsを組み合わせてみる。

//
// マッチング中に取得したキーワードを使いたい場合、inferキーワードを使う。
// TがArrayの場合、要素の型をinfer Uで取得し、型定義として使っている。
//
{
    type Flatten<T> = T extends Array<infer U> ? U : T;
    const num = 5;
    const arr = [3, 6, 9];
    type A = Flatten<typeof arr>; // number
    type N = Flatten<typeof num>; // number
}

//
// テンプレートリテラルを使って、SQL文にも型を定義することができる。
//
// constで定数定義になる。
const tables = ['users', 'posts', 'comments'] as const;
type Table = typeof tables[number];     // = 'users' | 'posts' | 'comments'
type AllSelect = `SELECT * FROM ${Table}`;  // = "SELECT * FROM users" | "SELECT * FROM posts" | "SELECT * FROM comments"
type LimitSelect = `${AllSelect} LIMIT ${number}`;  // = `SELECT * FROM users LIMIT ${number}` | `SELECT * FROM posts LIMIT ${number}` | `SELECT * FROM comments LIMIT ${number}`

const createQuery = (table: Table, limit?: number): AllSelect | LimitSelect => {
    return limit ? `SELECT * FROM ${table} LIMIT ${limit}` as const : `SELECT * FROM ${table}` as const;
}
console.log(createQuery('users', 20));
console.log(createQuery('posts'));

const q1 = 'SELECT * FROM users';
const q2 = 'SELECT id, body, createdAt FROM posts';
const q3 = 'SELECT userId, postId FROM comments';
type PickTable <T extends string> = T extends `SELECT ${string} FROM ${infer U}` ? U : never;
type Tables = PickTable <typeof q1 | typeof q2 | typeof q3 >; // 'users' | 'posts' | 'comments'
