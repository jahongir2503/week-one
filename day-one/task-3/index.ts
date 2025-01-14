function indexOf(firText:string, secText:string) {
    const textLength = firText.length;
    const subTextLength = secText.length;


    if (subTextLength === 0) return 0;
    if (subTextLength > textLength) return -1;

    for (let i = 0; i <= textLength - subTextLength; i++) {
        let matchFound = true;
        for (let j = 0; j < subTextLength; j++) {
            if (firText[i + j] !== secText[j]) {
                matchFound = false;
                break;
            }
        }
        if (matchFound) {
            return i;
        }
    }

    return -1;
}

console.log(indexOf("hello, how low", "low"));
console.log(indexOf("hello, how low", "hoow"));

