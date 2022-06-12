const isValid = (s: string): boolean => {
	if (s === "test") {
		return true;
	} else {
		return false;
	}
};

let s = "()";
console.log(isValid(s));

s = "({)}";
console.log(isValid(s));
