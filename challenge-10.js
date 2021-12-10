/*
Your task is to create a function that will take in an array of weather
objects and will return a rounded average of the wind speed.
*/

const exampleEntries = [
  {
    temperature:0,
    weather:"sunny",
    windDirection: "NNE",
    windSpeed:24
  },
  {
    temperature:10,
    weather:"cloudy",
    windDirection: "NNE",
    windSpeed:9
  }
];

const averageWindSpeed = (weatherEntries) => {
  // Code here!
  let totalWindSpeed = 0;

  for (let i =0; i < weatherEntries.length; i++) {
    totalWindSpeed += weatherEntries[i].windSpeed
  }
 return Math.round(totalWindSpeed/weatherEntries.length);

};

averageWindSpeed(exampleEntries);

// Output: 17
