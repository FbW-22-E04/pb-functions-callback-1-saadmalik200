function greetMessage(str) {
  console.log(`Good Morning, ${str}`);
}

// greetMessage("John");

function greetUsers(arr, cb) {
  arr.forEach((item) => {
    return cb(item);
  });
}

greetUsers(["John", "Peter", "Mark"], greetMessage);

// "Good Morning, John"

// "Good Morning, Peter"
// "Good Morning, Mark"
