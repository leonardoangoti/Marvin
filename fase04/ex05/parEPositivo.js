function parEPositivo(x) {
    
    if(x%2 == 0){
        y = Math.sign(x);
        if(y == 1 || y == 0) {
        return "Sim";
        } else if (y == -1 || y == -0) {
            return "Não";
        }
    } else {
        return "Não"
    }
}
