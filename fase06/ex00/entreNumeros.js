function entreNumeros(x, y) {
    var min, max;
    var contador = 0;
    if (x <= y) {
        min = x;
        max = y;
    } else {
        min = y;
        max = x;
    }
    while (min <= max) {
        console.log(min);
        min++;
    }
}

