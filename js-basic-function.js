//
// function
//
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

//
// substitute a functional definition to the variables.
//
let sum = (n) => {
  let sum = 1;
  for(let i = 0; i < n; i++) {
      sum *= 2
  }
  return sum;
};

console.log(sum(5));
