function greetMessage(str) {
  return function () {
    console.log(`Good Morning, ${str}`);
  };
}
// greetMessage("John")();

function greetUsers(arr, cb) {
  arr.map((item) => {
    // console.log(item);
    return cb(item)();
  });
}

// const greet = greetMessage("Hello");

// greet();

greetUsers(["John", "Peter", "Mark"], greetMessage);

// "Good Morning, John"

// "Good Morning, Peter"
// "Good Morning, Mark"
