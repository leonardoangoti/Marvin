function primo(num) {
    if(num!=1 && num != 0){
        var i = 2;    
        while ( i < num) {
            if (num % i == 0) {
                return "Não";
            }
            i++;
        }
        return "Sim";
    }
    return "Não";
}
