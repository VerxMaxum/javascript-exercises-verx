const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5/9);
  if(celcius % 1 === 0) return celcius;
  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius * 1.8) + 32;
  if(fahrenheit % 1 === 0) return fahrenheit;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
