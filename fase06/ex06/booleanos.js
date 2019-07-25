function booleanos(a){
        
    var contador = 0;
    while (contador < a.length) {
        if (a[contador] == true || a[contador] == false){
            a.splice(contador-1, 1, );   
        }
    }

    return a;        
}

console.log(booleanos([true, 1, 2, 3, false]));
