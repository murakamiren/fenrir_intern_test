import { isValid } from "./isValid";

let s = "()";
console.log(isValid(s));

s = "({)}";
console.log(isValid(s));
