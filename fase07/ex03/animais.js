function animais(x){
    
    var qtd = x.length; 
    var cont = 0;
    var idade = 5;
    var z;
    while ( cont < qtd ) {
        z = x[cont];
        delete z["altura"];
        z["idade:"] = idade;
        idade++;
        cont++;
    }
    
    return x
}