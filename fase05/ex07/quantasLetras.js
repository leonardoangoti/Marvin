function quantasLetras(a) {
    var tamanho = a.length;
    var contador = 0;
    var quantidade = 0;
    var x, str = "";
    while(contador < tamanho) {
        str = a[contador];
        x = str.toString().length;
        quantidade += x;
        contador++;
    }
    
    return quantidade;
}

