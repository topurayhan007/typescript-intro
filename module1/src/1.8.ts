{
  // destructuring

  const user = {
    id: 345,
    name: {
      firstName: "Topu",
      middleName: "Rayhan Rabby",
      lastName: "Mamud",
    },
    contactNo: "0170000000",
    address: "BD",
  };

  const {
    contactNo,
    // name: { middleName },
    name: { middleName: middle }, // aliasing
    address,
  } = user;

  // array destructuring

  const myFriends = ["Chandler", "Joey", "Ross", "Rachel", "Monica", "Phoebe"];

  // const [a, b, c, d] = myFriends;
  const [a, b, c, d] = myFriends;

  const [, , bestFriend, ...rest] = myFriends;
  //
}
