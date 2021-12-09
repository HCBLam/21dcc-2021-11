/*
Your task is to create a function that will take in an astronaut
object as a parameter and return a string using the properties of
the astronaut.
*/

const exampleAstronaut = {
  firstName: "Yuri",
  lastName: "Gagarin",
  nickname: "First!",
  prefix: "Cosmonaut"
};

const generateAstronautTag = (astronaut) => {
  // Code here!
  return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`

  // Remember to return a value!
};

generateAstronautTag(exampleAstronaut);

// Output:  Cosmonaut: Yuri "First!" Gagarin