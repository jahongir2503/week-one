function longestWord (word:string ){

    let long = word.split(' ')

    let lengths = long.sort(function(a:string,b:string){
        return b.length - a.length;
    });

    return lengths[0]

}

console.log(longestWord('load up on guns and bring your friends'))