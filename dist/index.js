"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValid_1 = require("./isValid");
let s = "()";
console.log((0, isValid_1.isValid)(s));
s = "([]){}";
console.log((0, isValid_1.isValid)(s));
s = "({)}";
console.log((0, isValid_1.isValid)(s));
s = "({()})";
console.log((0, isValid_1.isValid)(s));
//# sourceMappingURL=index.js.map