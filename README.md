# Type 'string[]' is not assignable to type 'string'
This TypeScript bug demonstrates a common type error: assigning an array of strings to a variable expecting a single string.

## The Bug
The `greeter` function expects a single string as input.  However, the `user` variable is an array of strings.  Trying to pass `user` to `greeter` results in a type error because TypeScript correctly identifies the type mismatch.

## Solution
The solution depends on the intended behavior.  If you want to greet each person in the array, you'll need to iterate over the array and call `greeter` for each element. If you want to greet them with all names concatenated you can use the `join` method.