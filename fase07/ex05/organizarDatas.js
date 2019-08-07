function organizarDatas(array){
    qtd = array.length
    var z, y;
    for (i = 0; i < qtd; i++){
        z = array[i];
        y = z["dataDeChegada"];
        //id = y.substr(,1)
        console.log(y);
        
        //array[i] = array[i]["dataDeChegada"][6:].parseInt() +array[i]["dataDeChegada"][:-8].parseInt() + array[i]["dataDeChegada"][3:5].parseInt();
    }
    //array = sort(array, key = lambda k: k["id"]);
    //for (i = 0; i <  qtd; i++){
    //    del(array[i]["id"])
    //}
    return array;
}


console.log(organizarDatas([ 
    { dataDeChegada : "11/30/2015", nome: 'Marconi', telefone:'32486745425'},
    { dataDeChegada : "11/31/2015", nome: 'Marcos', telefone:'32486745425'},
    { dataDeChegada : "11/25/2015", nome: 'B', telefone:'32486745425'},
    { dataDeChegada : "11/27/2015", nome: 'Testes', telefone:'32486745425'},
]));

