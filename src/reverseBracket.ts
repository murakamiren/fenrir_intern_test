export const reverseBracket = (s: string): string => {
	if (s === "(") {
		return ")";
	} else if (s === "{") {
		return "}";
	} else if (s === "[") {
		return "]";
	} else {
		return "pass";
	}
};
