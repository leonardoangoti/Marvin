function somaPares(x, y) {
    
    var min, max;
    var contador = 0;
    var total = 0;
    if (x <= y) {
        min = Math.ceil(x);
        max = Math.floor(y);
    } else {
        min = Math.ceil(y);
        max = Math.floor(x);
    }
    while (min <= max) {
        if (min % 2 == 0) {
            total += min;
        }
        min++;
    }
    
    return total;
}
