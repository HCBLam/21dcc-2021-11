/*
Your task is to write a function that takes in the temperature,
weather condition, wind speed, and direction as parameters and store
them inside a structure that holds each value as properties.

There's a small and important detail for this one, you must convert the
temperature from Fahrenheit to Celsius and convert the wind speed from
miles/hour to meters/second, and round both of them before storing them.
*/

const temperature = 32;
const condition = "Sunny with small clouds";
const windSpeed = 20;
const windDirection = "NNE";

const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!
  convertTemp = Math.round((temperature - 32) * 5 / 9);
  convertSpeed = Math.round(windSpeed / 2.237);
  return {
    temperature: convertTemp,
    windSpeed: convertSpeed,
    windDirection: windDirection,
    condition: condition
  };
};

storeWeatherConditions(temperature, condition, windSpeed, windDirection);

/*
Output:
  {
    temperature:0,
    windSpeed:9,
    windDirection:"NNE",
    condition:"Sunny with small clouds"
  }
*/
