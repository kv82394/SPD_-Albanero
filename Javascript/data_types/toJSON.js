let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);
  //these are skiped by json.stringigy()
//   Function properties (methods).
//Symbolic keys and values.
//Properties that store undefined.

//let json = JSON.stringify(value[, replacer, space])
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  
  room.occupiedBy = meetup; // room references meetup
  
  console.log( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}

  //let value = JSON.parse(str, [reviver]);

  // stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[1] ); // 1
