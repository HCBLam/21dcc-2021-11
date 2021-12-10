/*
Create a function that takes in a roster array and an astronaut object.
The function will add the astronaut to the roster and return the updated roster.
*/

const exampleRoster = []
const exampleAstronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
};

const addAstronautToRoster = (roster, astronaut) => {
  // Code here!
  roster.push(astronaut);
  return roster;

};

addAstronautToRoster(exampleRoster, exampleAstronaut);

/*
Output:
  const exampleRoster = [
    {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    }
  ]
*/
