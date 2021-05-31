//
// シンプルなclass定義
//
var SellProduct = /** @class */ (function () {
    function SellProduct(name, price) {
        var _this = this;
        this.print = function () { return console.log(_this.name, _this.price); };
        this.name = name;
        this.price = price;
    }
    ;
    return SellProduct;
}());
var sellProduct = new SellProduct('PS5', 40000);
sellProduct.print();
//
// 継承よりコンポジションを使おう
//
var Rectangle = /** @class */ (function () {
    function Rectangle(side1, side2) {
        this.getArea = function () { return 10; };
    }
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square(side) {
        var _this = this;
        this.name = 'square';
        // 軽症ではなく、RectangleクラスのgetArea()を直接利用している。
        // あくまでも利用したいのはgetArea()であり、Rectangle全体を継承すると、思わぬバグを生む可能性がある。
        this.getArea = function () {
            return new Rectangle(_this.side, _this.side).getArea();
        };
        this.side = side;
    }
    return Square;
}());
//
// interfaceを実装する
//
{
    var Rectangle_1 = /** @class */ (function () {
        function Rectangle(sideA, sideB) {
            this.sideA = sideA;
            this.sideB = sideB;
        }
        Rectangle.prototype.getArea = function () {
            return this.sideA + this.sideB;
        };
        return Rectangle;
    }());
}
//
// classの定義をすると、通常（コンストラクタ関数として）の定義を、
// interfaceの型定義の両方が行われるため、どちらの用法でも利用できる。
//
{
    var Point = /** @class */ (function () {
        function Point(sideA, sideB) {
            var _this = this;
            this.print = function () { return console.log(_this.sideA, _this.sideB); };
            this.sideA = sideA;
            this.sideB = sideB;
        }
        return Point;
    }());
    new Point(10, 89);
    // 以下のように型定義にも使える
    var square1 = { sideA: 100, sideB: 30 };
    var square2 = { sideA: 100, sideB: 30 };
    console.log(square1, square2);
}
