/*
Your task is to create a function that takes in a roster array,
and will calculate the amount of astronauts in the given roster
list and return said amount.
*/

const exampleRoster = [
  {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut",
    job:"Shuttle DJ"
  }
];

const countActiveAstronauts = (roster) => {
  // Code here!
  return roster.length
};

countActiveAstronauts(exampleRoster);

// Output:  1