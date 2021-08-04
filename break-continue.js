var i = 0;
while(i<15){
    console.log(i);
    if(i==10){ //condition for break
        break;
    }
    i++;
}

for(i=0; i<15; i++){
    console.log(i);
    if(i==8){ //condition for break
        break;
    }
}

var num = [20, 50, 89, 65, 32, 73, 55, 121, 98, 322, 88, 99, 95, 222, 300]
for(i=0; i<num.length; i++){
    var number = num[i];
    console.log(number);
    if(number>80){
        break;
    }
}

for(i=0; i<num.length; i++){ //var 'number' from before.
    var number = num[i];
    if(number>80){ //condition for continue. continue skips the parameter that is set
        continue;
    }
    console.log(number);
}