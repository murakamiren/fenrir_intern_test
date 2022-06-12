import { reverseBracket } from "./reverseBracket";

export const isValid = (s: string): boolean => {
	const sArr: string[] = s.split("");
	// console.log(sArr);
	for (let i = 0; i < sArr.length; i++) {
		const currS = sArr[i];
		const reverseCurrS = reverseBracket(currS);
		const closeIndex = sArr.indexOf(reverseCurrS);
		if (reverseCurrS === "pass" || i + 1 === closeIndex) {
			continue;
		}
		// console.log("closeIndex: " + closeIndex + currS + reverseCurrS + "i: " + i);

		if (closeIndex === -1) {
			return false;
		}
		for (let n = i; n < closeIndex; n++) {
			if (i !== n) {
				const searchS = sArr[n];
				const reverseSearchS = reverseBracket(searchS);
				if (reverseSearchS === "pass") {
					continue;
				}
				const searchCloseIndex = sArr.indexOf(reverseSearchS);
				// console.log("searchCloseIndex: " + searchCloseIndex + searchS + "n: " + n);

				if (searchCloseIndex === -1 || searchCloseIndex > closeIndex) {
					return false;
				}
			}
		}
	}
	return true;
};
