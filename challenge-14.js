/*
Your task is to write a function that will take in an array of objects
containing switches. The function will change the value of the isOn
property to true for every switch in the list, and then return the
updated array.
*/

const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
];

const switchAllTogglesOn = (toggleList) => {
  // Code here!
  toggleList.forEach(toggle => toggle.isOn = true);
  return toggleList;
};

switchAllTogglesOn(toggleList);

/*
Output:
  [
    {
      name:"Air",
      isOn:true
    },
    {
      name:"Radio",
      isOn:true
    },
  ]
*/
