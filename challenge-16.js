/*
Your task is to write a function that will take in two position objects.
Calculate the average speed from the two positions and return the average
speed rounded to the first decimal point.

Each object contains the altitude in meters, and a time stamp in seconds.
*/

  const firstPosition = {
    time: 1637074462,
    altitude: 1100
  }
  const secondPosition = {
    time: 1637074558,
    altitude: 2200
  }

  const getAverageSpeed = (firstPosition, secondPosition) => {
    const altDiff = secondPosition.altitude - firstPosition.altitude;
    const timeDiff = secondPosition.time - firstPosition.time;

    const avgSpeed = Number((altDiff / timeDiff).toFixed(1));
    return avgSpeed;
  }

getAverageSpeed(firstPosition, secondPosition);

// Output:  11.5


// Note:  .toFixed() returns a string!
// So need to convert back to number using Number().