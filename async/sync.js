
// implement func to sum two number (sync , callback ,async)
function sumSync(x, y) {
    return x + y
}
function sumCallback(x, y, z) {
    z(x + y)
}


function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + y)
        }, 5000)

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


sumAsync(6, 6).then((res) => {
    console.log(res)
})
multiAsync(6, 6).then((res) => {
    console.log(res)
})

console.log(sumSync(4, 7))




