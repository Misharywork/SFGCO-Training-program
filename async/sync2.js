function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + y)
        }, 500)

    })
}

function multiAsync(x, y) {
    return new Promise((resolve, reject) => {
        resolve(x * y)
    })
}



// Calling 

// sumCallback(5,5,(z)=>{
//     console.log(z)
// })

sumAsync(6, 6)
    .then(res => {
        console.log(res)
        return res * 2
    })
    .then((data) => {
        console.log(data)
    })





