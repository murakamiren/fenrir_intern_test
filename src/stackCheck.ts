export const stackCheck = (s: string): boolean => {
	if (s === "(" || s === "{" || s === "[") {
		return true;
	} else {
		return false;
	}
};
