const deylay =2000

const massage = 'I think I`m dumb'

function think (delay:number,massage:string){


    return  new Promise(function(resolve){
        setTimeout(() => {
            resolve(massage)
        },deylay)
    })

        .then(() =>{
            console.log(massage)
        })
}

think(deylay,massage)
