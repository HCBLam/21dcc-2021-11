/*
Your task is to create a function that will take in an array
representing the roster of astronauts, and return an array
containing the jobs of each astronaut as a string.

In other terms, for each astronaut of the roster, you want to take
the job and add it to a list, then return said list.
*/

const exampleRoster = [
  {
    job: "Shuttle DJ"
  },
  {
    job: "Space Cook"
  }
];

const listAstronautJobs = (roster) => {
  const jobArray = [];

  for (const astronaut of roster) {
    jobArray.push(astronaut.job);
  }
  return jobArray;
};

listAstronautJobs(exampleRoster);

// Output: ["Shuttle DJ", "Space Cook"]


