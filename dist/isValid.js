"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
const stackCheck_1 = require("./stackCheck");
const isValid = (s) => {
    if (s !== "") {
        const sArr = s.split("");
        // console.log(sArr);
        let stack = [];
        for (let i = 0; i < sArr.length; i++) {
            //開き括弧だけstackにpush
            if ((0, stackCheck_1.stackCheck)(sArr[i])) {
                stack.push(sArr[i]);
            }
            // console.log(stack);
            if (stack.length === 0) {
                return false;
            }
            if (sArr[i] === ")") {
                let x = stack[stack.length - 1];
                stack.pop();
                if (x === "{" || x === "[") {
                    return false;
                }
            }
            else if (sArr[i] === "}") {
                let x = stack[stack.length - 1];
                stack.pop();
                if (x === "(" || x === "[") {
                    return false;
                }
            }
            else if (sArr[i] === "]") {
                let x = stack[stack.length - 1];
                stack.pop();
                if (x === "(" || x === "{") {
                    return false;
                }
            }
        }
    }
    else {
        return false;
    }
    return true;
};
exports.isValid = isValid;
//# sourceMappingURL=isValid.js.map