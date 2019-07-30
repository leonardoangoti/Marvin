function meuNome(x){
    
    var eu = new Object();
    eu = x;
    eu.nome = eu.nome.substr(0,1).toUpperCase() + eu.nome.substr(1).toLowerCase()
    return eu.nome;
    
}


