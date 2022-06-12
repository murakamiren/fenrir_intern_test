import { stackCheck } from "./stackCheck";

export const isValid = (s: string): boolean => {
	if (s !== "") {
		const sArr: string[] = s.split("");
		console.log(sArr);
		let stack: string[] = [];
		for (let i = 0; i < sArr.length; i++) {
			if (stackCheck(sArr[i])) {
				stack.push(sArr[i]);
			}
			console.log(stack);

			if (stack.length === 0) {
				return false;
			}

			if (sArr[i] === ")") {
				let x = stack[stack.length - 1];
				stack.pop();
				if (x === "{" || x === "[") {
					return false;
				}
			} else if (sArr[i] === "}") {
				let x = stack[stack.length - 1];
				stack.pop();
				if (x === "(" || x === "[") {
					return false;
				}
			} else if (sArr[i] === "]") {
				let x = stack[stack.length - 1];
				stack.pop();
				if (x === "(" || x === "{") {
					return false;
				}
			}
		}
	} else {
		return false;
	}
	return true;
};
