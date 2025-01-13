function runLengthEncoding(rLE: string): string {
    let encodedString: string[] = [];
    let count: number = 1;

    for (let i = 0; i < rLE.length; i++) {
        if (rLE[i] === rLE[i + 1]) {
            count++;
        } else {
            encodedString.push(count.toString() + rLE[i]);
            count = 1;
        }
    }

    return encodedString.join("");
}

console.log(runLengthEncoding('YYYYYYYYYYYYYEEEEEEEEAAAH'))


function runLengthDecoding(rLD:string){
    let  decoding = '';

    for ( let i = 0; i <  rLD.length; i += 2){
        const count: number = parseInt(rLD[i]);
        const char: string = rLD[i + 1];

        decoding += char.repeat(count);
    };
    return decoding;
};



console.log(runLengthDecoding('9Y8E3A1H'));