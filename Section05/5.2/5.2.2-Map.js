let cityArray = data.map(item => item.address.city);
console.log(cityArray);
// create an array of latitude and longitude coordinate pairs
const coords = data.map(item => {
  let lat = item.address.geo.lat;
  let lng = item.address.geo.lng;

  return `${lat}, ${lng}`;
});
console.log(coords);
// create an array of strings that combine the company's catchPhrase and bs
const jargon = data.map(
  item => `${item.company.catchPhrase} ${item.company.bs}`
);
console.log(jargon);