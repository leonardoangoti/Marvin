function fizzbuzz(x, y) {
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
        //console.log(min / 3);
        //console.log(min / 5);
        
        if (min % 3 == 0 && min % 5 == 0){
            console.log(min + " FizzBuzz");
        } else if (min % 3 == 0){
            console.log(min + " Fizz");
        } else if (min % 5 == 0) {
            console.log(min + " Buzz");
        } else {
        console.log(min);
        }
        min++;
    }
}
