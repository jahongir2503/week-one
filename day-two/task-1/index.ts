const date = {
    name:'Kurt',
    age:'27',
    address: undefined,
    email:"",
    phone: null,
    job:'musician'

}
const countFilledValues = (obj: Record<string, unknown>):number => {
    let count = 0;

    for (let key in obj){
        if(obj[key] !== null && obj[key]!== undefined && obj[key] !== ""){
            count ++;
        }

    }
    return count;
}
console.log(countFilledValues((date)))