// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function exampleWithTwoParams(param1, param2) {
  let sum = param1 + param2;
  console.log(param1, param2);
  return param1 + param2;
}

// invoke the function and pass in two numbers as arguments
exampleWithTwoParams(115, 22);
// invoke the function and pass in more than two numbers
exampleWithTwoParams(1, 2, 3);
// invoke the function and pass in only one number
exampleWithTwoParams(1);

// change the function to set default values for the parameters
function exampleWithDefaultValueChanged(param1, param2 = 5) {
  console.log(param1, param2);
  return param1 + param2;
}
// again, invoke the function and pass in only one number
exampleWithDefaultValueChanged(1);

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function exampleWithRestParam(param1, param2, ...param3) {
  console.log(param1, param2);
  console.log(param3);
  return param1 + param2;
}
// again, invoke the function and pass in more than two numbers
exampleWithRestParam(1, 2, 3, 4, 5, 6, 7);
