"use strict";
const isValid = (s) => {
    if (s === "test") {
        return true;
    }
    else {
        return false;
    }
};
let s = "()";
console.log(isValid(s));
s = "({)}";
console.log(isValid(s));
//# sourceMappingURL=index.js.map