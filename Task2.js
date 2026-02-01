const number = [ 1,2,3,4,5,6,7,8,9,10 ]

function Numbers(num) {
    let sum = 0
    let min = num[0]
    let max = num[0]

    for ( let i = 0; i < num.length; i++ ) {
        sum += num[i]
        if ( num[i] < min ) min = num[i];
        if ( num[i] > max ) max = num[i];
    }
    return {
        sum : sum,
        average : sum / num.length,
        min : min,
        max : max,
    };
}

console.log(Numbers(number))