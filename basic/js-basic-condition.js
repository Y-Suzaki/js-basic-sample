let num1 = 1;
let num2 = 5;
let num3 = 10;

// if
if(num1 === 1) {
    console.log(1)
} else if(num1 === 2) {
    console.log(2);
} else {
    console.log("else");
}

// logical operator
if(num1 === 1 && num2 === 5) {
    console.log("OK");
} else {
    console.log("NG");
}

// switch
switch (num3) {
    case 5:
        console.log(5);
        break;
    case 10:
        console.log(10);
        break;
    default:
        console.log("default");
}