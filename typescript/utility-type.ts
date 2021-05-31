type PrinterProduct = {
    name: string;
    price: number;
    stock: boolean;
}

//
// メンバ変数の定義を一括で変更する。Readonly, Required, Partial
//
{
    // 各プロパティをReadOnlyとして再定義
    type ReadProduct = Readonly<PrinterProduct>;
    const readProduct: ReadProduct = {name: 'Printer', price: 10000, stock: false};
    // readProduct.price = 9000;    // コンパイルエラー

    // その他、Required（全て必須）、Partial（全てオプショナル）もある。
    type RequiredProduct = Required<PrinterProduct>;
    type OptionalProduct = Partial<PrinterProduct>;
}

//
// メンバ変数の一部を抽出して再定義
// どちらも、name, stockメンバ変数が定義された型を表す。
{
    type PickProduct = Pick<PrinterProduct, 'name' | 'stock'>;
    type OmittedProduct = Omit<PrinterProduct, 'price'>;
}

//
// 文字列リテラルなどの列挙的な型を再定義する。
//
{
    type typePrinter = 'low' | 'middle' | 'high';
    type nationType = Extract<typePrinter, 'middle' | 'high'>;
    type abroadType = Exclude<typePrinter, 'high'>;

    // nullを許容しない型もある。
    type nonNull = NonNullable<string | number | null>;
    // const test: nonNull = null;  // コンパイルエラー
}

//
// 特殊な型
//
// Record<K, T> Kの要素をキー、値の型をTとした定義を作成。
{
    type ScannerProductKey = 'name' | 'feature' | 'remark';
    type ScannerProduct = Record<ScannerProductKey, string>;
    const product: ScannerProduct = {name: 'x', feature: 'x', remark: 'x'};
}

// 大文字、小文字に変換
{
    type ScannerProductKey = 'name' | 'Feature' | 'REMARK';
    type lowerProduct = Lowercase<ScannerProductKey>;
    type upperProduct = Uppercase<ScannerProductKey>;
    type upperCamel = Capitalize<ScannerProductKey>;
    type lowerCamel = Uncapitalize<ScannerProductKey>;
}