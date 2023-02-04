// select all unordered list (ul) elements
console.log(
  "This is UL elements from getElements: ",
  document.getElementsByTagName("ul")
);
console.log(
  "This is UL elenets from querySelectorAll: ",
  document.querySelectorAll("ul")
);
// select all elements with the class "class-week"
console.log(document.querySelectorAll(".class-week"));
console.log(document.getElementsByClassName("class-week"));
// select all elements with the class "nav-bar"
console.log(document.querySelectorAll(".nav-bar")[0]);
console.log(document.getElementsByClassName("nav-bar"));
// select the element with the id "dog-picture" and save it to a variable
const dogPic = document.getElementById("dog-picture");
console.log("This is dogPIC: ", dogPic);
