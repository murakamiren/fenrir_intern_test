import { reverseBracket } from "./reverseBracket";

export const isValid = (s: string): boolean => {
	const sArr: string[] = s.split("");
	console.log(sArr);
	for (let i = 0; i < sArr.length; i++) {
		const currS = sArr[i];
		const reverseCurrS = reverseBracket(currS);
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
