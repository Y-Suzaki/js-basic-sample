// function
function add(num1 , num2) {
    return num1 + num2
}

function checkParameter(parameter) {
    return parameter.length <= 10;
}

console.log(add(10, 100));
console.log(checkParameter("aaaaaaaaaaaaaaaaaaaaaa"));

// lambda
const colors = ["red", "green", "blue"];
const newColor = colors.filter((value) => value.length >= 4);
console.log(newColor);
