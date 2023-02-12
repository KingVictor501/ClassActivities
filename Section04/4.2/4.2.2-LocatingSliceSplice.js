const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

console.log(
  `The first index of 'a' is ${firstA}, the first index of 'b' is ${firstB}, and the first index of 'c' is ${firstC}`
);
// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");

console.log(
  `The last index of 'a' is ${lastA}, the last index of 'b' is ${lastB}, and the last index of 'c' is ${lastC}`
);
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDuplicates(array, duplicatedValues) {
  let firstInstance = array.indexOf(duplicatedValues);
  let lastInstance = array.lastIndexOf(duplicatedValues);

  while (firstInstance !== lastInstance) {
    array.splice(lastInstance, 1);
    lastInstance = array.lastIndexOf(duplicatedValues);
  }

  return array;
}

let singleAList = removeDuplicates(arr, "a");
console.log(singleAList);
let singleB = removeDuplicates(arr, "b");
console.log(singleB);
let singleC = removeDuplicates(arr, "c");
console.log(singleC);