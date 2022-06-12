import { isValid } from "./isValid";

let s = "()";
console.log(isValid(s)); // should be true

s = "([]){}";
console.log(isValid(s)); // should be true

s = "({)}";
console.log(isValid(s)); // should be false
