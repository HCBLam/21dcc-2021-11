/*
Your task is to write a function that will take in an array of objects
containing a sender and a message as a parameter. The function will
then parse a message from each object, add it to an array then return
the built array.
*/

const messages = [
  {origin:"MC", message:"Hello!"},
  {origin:"Shuttle", message:"Hey!"},
];

const parseTranscripts = (messages) => {
  const parsedMessages = messages.map(message => `${message.origin}: ${message.message}`)
  return parsedMessages;
};

parseTranscripts(messages);

// Output:     ["MC: Hello!", "Shuttle: Hey!"]

