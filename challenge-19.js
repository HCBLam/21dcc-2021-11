/*
Your task is to write a function that will take in a list of data
entries in the shape of an array of objects. The function will then
organize the entries by type and store each bit of data (string) in
each list, in the shape of an object containing arrays.
*/

const listOfReceivedData = [
  {type:"astro", data:"Saturn Data"},
  {type:"bio", data:"Space Potatoes"},
  {type:"physics", data:"Lagrange Points"},
  {type:"bio", data:"OMG Tardigrades"},
  {type:"physics", data:"Material reflectivity"},
  {type:"astro", data:"Mercury is not the hottest"},
]

const organizeData = (receivedData) => {
  // Code here!

  const finalObject = {};

  receivedData.forEach(item => {
    // if this property key doesn't already exist in the finalObject
    // then set it and assign it an empty string
    if (!finalObject[item.type]) {
      finalObject[item.type] = [];
    }
    // otherwise, push the data to the array for the specific key
    finalObject[item.type].push(item.data);
  });

  return finalObject;
};

organizeData(listOfReceivedData);

/*
Output:
  {
    "astro":["Saturn Data","Mercury is not the hottest"],
    "bio":["Space Potatoes","OMG Tardigrades"],
    "physics":["Lagrange Points","Material reflectivity"],
  }
*/

