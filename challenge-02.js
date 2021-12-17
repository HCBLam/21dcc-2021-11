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
  return `${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`
};

generateAstronautTag(exampleAstronaut);

// Output:  Cosmonaut: Yuri "First!" Gagarin