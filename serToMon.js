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
let myQuantuty = seerToMon(100);
console.log(myQuantuty);