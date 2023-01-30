// create an Array using an Array literal
const shoeBrand = [Nike, Adidas, Reebok];
// access the 1st item in the Array
console.log(shoeBrand[0]); //Nike
// access the last item in the Array
shoeBrand[2]; //Reebok
// print the length of the Array
console.log(shoeBrand.length);
// use the length property to access the last item in the Array
shoeBrand[shoeBrand.lengh - 1];
// with for...of, loop over the Array, modify the value and add to a different Array
for (let shoeBrand of shoeBrand) {
  shoeBrand += 1;
  console.log(shoeBrand);
  console.log(shoeModel);
}
