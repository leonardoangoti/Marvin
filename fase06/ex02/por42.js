function por42(x, y) {
    var min, max;
    var contador = 0;
    var a = [];
    
    if(x < y){
        min = x;
        max = y;
    } else {
        min = y;
        max = x;
    }
    
    while (min <= max) {
        if (min == 84) {
            return 84;
        }
        min++;
    }

    return false;
}
