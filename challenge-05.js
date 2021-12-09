/*
Your task is to write a function that will assign a job to each astronaut.
*/

const exampleAstronaut = {
  firstName:"Chris",
  lastName: "Hadfield",
  nickname:"Space Oddity",
  prefix:"Astronaut"
};

const job = 'Shuttle DJ';

const addJobToAstronaut = (astronaut, job) => {
  // Code here!
  astronaut.job = job;
  return astronaut;

};

addJobToAstronaut(exampleAstronaut, job);

/*
Output:
  const exampleAstronaut = {
    firstName:"Chris",
    lastName: "Hadfield",
    nickname:"Space Oddity",
    prefix:"Astronaut",
    job:"Shuttle DJ"
  }
*/