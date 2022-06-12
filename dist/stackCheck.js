"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackCheck = void 0;
const stackCheck = (s) => {
    if (s === "(" || s === "{" || s === "[") {
        return true;
    }
    else {
        return false;
    }
};
exports.stackCheck = stackCheck;
//# sourceMappingURL=stackCheck.js.map