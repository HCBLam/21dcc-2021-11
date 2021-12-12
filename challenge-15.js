/*
Your task is to write a function that will take in a launch date and a
mission name as strings. Calculate the difference between two dates in
days and return an object containing the name of the mission and a
rounded day difference.
*/

const launchDate = "2021-12-12";
const fakeToday = "2021-12-01";
const missionName = "Moon visit";

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!

  // Code here!
  // Use Date.parse() to convert string dates into millisecond dates.
  const timeDifference = Date.parse(launchDate) - Date.parse(today)
  // There are 1000*60*60*24 milliseconds in a day (86,400,000).
  const dayDifference = Math.round((timeDifference / 86400000))

  const launchDetails = {
    missionName,
    daysRemaining: dayDifference
  }
  return launchDetails;

};

timeRemaining(launchDate, missionName, fakeToday);

/*
Output:
  {
    missionName = "Moon visit",
    daysRemaining = 11
  }
*/