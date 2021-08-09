/* 
converting mon from seer.
*/
function seerToMon(mon){
    let seerPerMon = 40;
    if (typeof mon != 'number'){
    return 'please input a valid quantity';
    }
    else{
        mon = mon / seerPerMon;
        return mon;
    }
}
// output.
/* 
let myQuantuty = seerToMon(100);
console.log(myQuantuty); 
*/


/* 
Total sales calculation on a store.
*/
function totalSales(shirts, pants, shoes){
    const pricePerShirt = 100, pricePerPant = 200, pricePerShoe = 500;
    if(typeof pricePerShirt != 'number' && typeof pricePerPant != 'number' && typeof pricePerShoe != 'number'){
        return 'please input the correct value';
    }
    else{
        const total = shirts * pricePerShirt + pants * pricePerPant + shoes * pricePerShoe;
        return total;
    }
}
// output.
/*
 let myBuyings = totalSales(5, 2, 1);
console.log(myBuyings);
 */


/* 
delivery cost for different quantity of products.
*/
function deliveryCost(quantity){
    let costPerHundred = 100, costPerTwohundred = 80, restCost = 50;
    if(typeof quantity != 'number'){
    return 'please input a valid number';
    }
    if(quantity <= 100){
        quantity = quantity * costPerHundred;
        return quantity;
    }
    else if(quantity <= 200){
        quantity = 100 * costPerHundred + (quantity - 100) * costPerTwohundred;
        return quantity;
    }
    else{
        quantity = 100 * costPerHundred + 100 * costPerTwohundred + (quantity - 200) * restCost;
        return quantity;
    }
}
// output.
/* 
let myTshirt = deliveryCost(300);
console.log(myTshirt);
 */


/* 
Getting perfect friends name from all friends.
*/
let friends = ['Abu', 'Habu', 'Babu', 'Akram', 'Sunny', 'Sabu'];
function perfectFriend(bestFriend){
    let friend = [];
    if(typeof bestFriend != 'object'){
        return 'please check your input.'
    }
    for(let i = 0; i<bestFriend.length; i++){
        if(bestFriend[i].length == 5){
            friend.push(bestFriend[i]);
            break;
        }
    }
    return friend;
}
// output.
/*
 let myFriend = perfectFriend(friends);
console.log(myFriend);
 */