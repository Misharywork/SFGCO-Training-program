const orders = [
{ name: 'apple' , price : 10 , quantity : 5},
{ name: 'orange' , price : 20 , quantity : 10},
{ name: 'cherry' , price : 30 , quantity : 15},
{ name: 'bread' , price : 40 , quantity : 20},
{ name: 'books' , price : 50 , quantity : 25}
]

function totalRevenue(orders) {
    return orders.reduce((total , order) => {
        return total + order.price * order.quantity;
    }, 0)
}

const TR = totalRevenue(orders)
console.log(TR)