"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
const reverseBracket_1 = require("./reverseBracket");
const isValid = (s) => {
    const sArr = s.split("");
    // console.log(sArr);
    for (let i = 0; i < sArr.length; i++) {
        const currS = sArr[i];
        const reverseCurrS = (0, reverseBracket_1.reverseBracket)(currS);
        if (reverseCurrS !== "pass") {
            const firstIndex = sArr.indexOf(currS);
            const lastIndex = sArr.lastIndexOf(reverseCurrS);
            const betweenNumber = lastIndex - firstIndex;
            if (betweenNumber % 2 === 0) {
                return false;
            }
        }
    }
    return true;
};
exports.isValid = isValid;
//# sourceMappingURL=isValid.js.map