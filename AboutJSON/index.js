const person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "hiking", "coding"],
    address: {
      city: "New York",
      country: "USA"
    }
  };
  
  const jsondata = JSON.stringify(person)
  console.log(jsondata);
  
  
  const objectdata = JSON.parse(jsondata)
  console.log(objectdata);