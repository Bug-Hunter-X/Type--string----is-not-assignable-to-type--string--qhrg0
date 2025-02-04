function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Iterate over the array
user.forEach(name => {
    console.log(greeter(name));
});

// Solution 2: Concatenate the names
let userName = user.join(" ");
console.log(greeter(userName)); // Greets "Jane Doe"