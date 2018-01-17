const item={
    "name": "Biscuits",
    "type":"regular",
    "category":"food",
    "price":2.0
}

const applyCoupon = category=>discount=>obj=>
    {
        obj.price=obj.price-(obj.price*discount);
        return obj;
    }

console.log(applyCoupon("food")(0.1)(item).price);