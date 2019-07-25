function booleanos(a){
        
    var contador = 0;
    console.log("Tamanho do array " + a.length);
    while (contador < a.length) {
        console.log("Possição do array: " + a[contador].toString());
        if (a[contador].toString() == "true" || a[contador].toString() == "false"){
            a.splice(contador, 1);   
        }
        contador++;
    }

    return a;        
}

console.log(booleanos([true, false , 1 , 2 , 3]));
