function ateZero(x) {
    var min, max;
    var contador = 0;
    var a = [];
    
    if(x > 0){
        min = 0;
        max = x;
    } else {
        min = x;
        max = 0;
    }
    
    while (min <= max) {
        a.push(min);
        min++;
    }
    
    return a;
}
