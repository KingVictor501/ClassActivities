const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const removeLastItem1 = nums.pop();
const removeLastItem2 = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
const removeFrontItem1 = nums.shift();
const removeFrontItem2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(removeLastItem1, removeLastItem2);
nums.push(removeFrontItem2, removeFrontItem1);