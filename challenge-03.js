/*
Your task is to create a function that will take the gauge object as a
parameter, and will return true if the current value is between the
minimum and maximum, and return false if the value is outside those.
*/

const exampleGauge = {
  current:0.4,
  min:0.1,
  max:0.9
};

const checkGaugeStatus = (gauge) => {
  // Code here!
  if (gauge.current > gauge.min && gauge.current < gauge.max) {
    return true
  } else {
    return false
  }
};

checkGaugeStatus(exampleGauge);

// Output:  true
