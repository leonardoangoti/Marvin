function pinguins(x){
    
    var qtd = x.length; 
    var cont = 0;
    var z;
    while ( cont < qtd ) {
        z = x[cont];
        z["roupa:"] = {cabeca: "oculos de sol", camisa: "jaqueta polar", pes: "tenis"};
        cont++;
    }
    
    return x
}
