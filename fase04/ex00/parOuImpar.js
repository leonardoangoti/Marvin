function parOuImpar(x) {
    
    y = Math.sign(x);
    if(x%2 == 0){
        return "Par";
    }   
    else if (y == -1 || y == -0){
        return "�mpar";
    }
    if(x%2 == 1){
       return "�mpar"; 
    }
    
    
}
