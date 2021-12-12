/*
Your task is to write a function that will take in an array of toggle
objects and a specific toggle name. The goal is to switch only the
specific toggle, without affecting the other toggles and then return
the updated array.
*/

const toggleList = [
  {
    name: "toggleA",
    isOn: false
    },
  {
    name: "toggleB",
    isOn: true
  }
];
const specificToggle = "toggleA";


const switchSpecificToggle = (toggleList, specificToggle) => {
  // Code here!
  toggleList.forEach(toggle => {
    if (toggle.name === specificToggle) {
      toggle.isOn = !toggle.isOn;
    };
  });
  return toggleList;
};

switchSpecificToggle(toggleList, specificToggle);


/*
Output:
  [
    {
      name: "toggleA",
      isOn: true
    },
    {
      name: "toggleB",
      isOn: true
    }
  ]
*/
