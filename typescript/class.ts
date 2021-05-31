//
// シンプルなclass定義
//
class SellProduct {
    // TypeScriptでは、メンバ変数の事前定義が必要
    private readonly name: string;
    private readonly price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price
    };

    print = () => console.log(this.name, this.price)
}

const sellProduct = new SellProduct('PS5', 40000);
sellProduct.print()

//
// 継承よりコンポジションを使おう
//
class Rectangle {
    constructor(side1: number, side2: number) {
    }
    getArea = (): number => 10
}

class Square {
    private readonly name: string = 'square';
    private side: number;
    constructor(side: number) {
        this.side = side
    }
    // 軽症ではなく、RectangleクラスのgetArea()を直接利用している。
    // あくまでも利用したいのはgetArea()であり、Rectangle全体を継承すると、思わぬバグを生む可能性がある。
    getArea = (): number => {
        return new Rectangle(this.side, this.side).getArea()
    }
}

//
// interfaceを実装する
//
{
    interface Shape {
        readonly name: string;
        // 引数なし、戻り値number
        getArea: () => number;
    }

    interface Quadrangle {
        sideA: number;
        sideB? :number; // ?付きは実装先のclassで定義してもしなくても良い。
        sideC?: number; // ?付きは実装先のclassで定義してもしなくても良い。
    }

    class Rectangle implements Shape, Quadrangle {
        constructor(sideA: number, sideB: number) {
            this.sideA = sideA;
            this.sideB = sideB;
        }

        readonly name: string;
        sideA: number;
        sideB: number;

        getArea(): number {
            return this.sideA + this.sideB;
        }
    }
}

//
// classの定義をすると、通常（コンストラクタ関数として）の定義を、
// interfaceの型定義の両方が行われるため、どちらの用法でも利用できる。
//
{
    class Point {
        sideA: number;
        sideB: number;
        constructor(sideA: number, sideB: number) {
            this.sideA = sideA;
            this.sideB = sideB;
        }
        print? = () => console.log(this.sideA, this.sideB);
    }

    interface intPoint {
        sideA: number;
        sideB: number;
    }

    new Point(10, 89)
    // 以下のように型定義にも使える
    const square1: Point = {sideA: 100, sideB: 30};
    const square2: intPoint = {sideA: 100, sideB: 30};
    console.log(square1, square2);
}