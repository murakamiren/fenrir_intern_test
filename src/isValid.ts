export const isValid = (s: string): boolean => {
	const sArr: string[] = s.split("");
	console.log(sArr);
	for (let i = 0; i < sArr.length; i++) {
		const firstIndex = sArr.indexOf(sArr[i]);
		const lastIndex = sArr.lastIndexOf(sArr[i]);

		const betweenNumber = lastIndex - firstIndex;
		if (betweenNumber % 2 !== 0) {
			return false;
		}
	}
	return true;
};
