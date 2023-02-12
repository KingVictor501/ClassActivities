// using forEach, print a list of cities from the data
data.forEach(item => console.log(item.address.city));
// create an array of latitude and longitude coordinate pairs
const coords = [];
data.forEach(item => {
  let lat = item.address.geo.lat;
  let lng = item.address.geo.lng;

  coords.push(`${lat}, ${lng}`);
});
console.log(coords);
// create an array of strings that combine the company's catchPhrase and bs
const phrases = [];

data.forEach(item => {
  let currentPhrase = `${item.company.bs} ${item.company.catchPhrase}`;
  phrases.push(currentPhrase);
});

console.log(phrases);