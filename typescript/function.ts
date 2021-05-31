{
    // {
    //   "compilerOptions": {
    //     "noImplicitAny": true
    //   }
    // }
    // 引数の型定義がないとコンパイルエラー
    function add(n: number, m: number): number {
        return n + m;
    }
    console.log(add(3, 9))
}

{
    const add = (n: number, m: number): number => {
        return n + m
    }
    console.log(add(5, 9))
}

// 戻り値がないものはvoid
{
    const print = ((value: string): void => {
        console.log(value)
    })
    print('Hello.')
}

//
// interfaceとして関数の型を定義
//
{
    interface intAdd {
        (n: number, m:number): number
    }
    const add: intAdd = (n, m) => {
        return n + m;
    }
    console.log(add(10, 30))
}

//
// ジェネリクス
//
{
    const toArray = <T>(n: T, m: T): T[] => {
        return [n, m]
    }
    console.log(toArray('AA', 'BB'))
    console.log(toArray(8, 22))
    // 以下はコンパイルエラー
    // console.log(toArray(1, 'tata'))

    const toArray2 = <T>(...args: T[]): T[] => [...args]
    console.log(toArray2(1, 2, 3, 4, 5))
}
