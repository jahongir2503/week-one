function identicalLetters( firstWord: string, secondWord: string) {
    const Word1 = new Set(firstWord);
    const Word2 = new Set(secondWord);

    const ident = [...Word1].filter(char => Word2.has(char));

    return ident.join('');

}

console.log(identicalLetters('Smells','like'));


