const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

console.log(firstA + " " + firstB + " " + firstC);

// find the last index of "a", "b", and "c"
let firstA = arr.lastIndexOf("a");
let firstB = arr.lastIndexOf("b");
let firstC = arr.lastIndexOf("c");

console.log(lastA + " " + lastB + " " + lastC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(array, duplicatedValues){
 let firstInstance = array.indexOf(duplicatedValues)
  if (array.indexOf(duplicatedValues) !== array.lastIndexOf(duplicatedValues)) {

 }
}
removeDuplicates(arr, "a");