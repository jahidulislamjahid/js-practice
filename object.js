// declaring objects

var declaringObjects = {name: "myname", id: 128, address: 'jatrabari', age:14,}


var objectDeclaration = {
    name: 'name',
    address:"jatrabari",
    phone:01723465,
    id:23765,
}


// object properties
var phone = {
    brand: "oneplus",
    memory: "8gb",
    model: "A6000",
    processor: "sd845",
    color: "silkwhite",
    price: 45500,
}

// getting properties from objects 
console.log(phone.color);

// setting values of object properties
phone.price = 25000;
phone["price"] = 22000;
var newPrice = "price";
phone[newPrice] = 23000;
console.log(phone);