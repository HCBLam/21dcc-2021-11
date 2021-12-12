/*
Your task is to write a function that will take in an array of lunch
choices (strings) and return the choice as a string with the most votes.

There is always two lunch choices, and always an odd number of astronauts!
*/

const listOfChoices = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich",
  "Ice Cream Sandwich"
];

const chooseLunchWinner = (listOfChoices) => {

  // Set up the data structure to contain the tally of votes
  const voteTally = {};

  // Set each choice as a property key and organize the votes to get tallies
  listOfChoices.forEach(choice => {
    if (!voteTally[choice]) {
      voteTally[choice] = 0;
    }
    voteTally[choice] += 1;
  })

  // Set the first property key as the default starting key
  let biggestKey = Object.keys(voteTally)[0];

  // Compare the values for each property key to find the highest tally of votes
  for (const key in voteTally) {
    if (voteTally[key] > voteTally[biggestKey]) {
      biggestKey = key;
    }
  }

  return biggestKey;
};

chooseLunchWinner(listOfChoices);


// Output: Chicken Dinner


/*
Alternate Solution:  this works if there are only 2 choices being voted on

const chooseLunchWinner = (listOfChoices) => {
  let choiceA = listOfChoices[0];

  let countA = listOfChoices.filter(choice => (choice === choiceA));
  let countB = listOfChoices.filter(choice => (choice !== choiceA));

  return (countA.length > countB.length) ? choiceA : countB[0];
};
*/


/*
Another alternate solution:  again, only works if there are only 2 choices available

const chooseLunchWinner = (listOfChoices) => {
  let choiceA = listOfChoices[0];
  let choiceB = '';

  let countA = 0;
  let countB = 0;

  listOfChoices.forEach(choice => {
    if (choice === choiceA) {
      countA ++;
    } else {
      choiceB = choice;
      countB ++
    }
  });

  return (countA > countB) ? choiceA : choiceB
};
*/