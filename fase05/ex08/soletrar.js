function soletrar(a) {
    var tamanho = a.length;
    var contador = 0;
    var str = "";
    var x = "";
    while(contador < tamanho) {
        str = a[contador];
        x += str.toString();
        contador++;
    }
    
    return x;
}


