function passadoOuFuturo(data) {
       if (data < 1445385600000) {
           return "Passado";
       } else if (data >= 1445385600000) {
           return "Futuro";
       }
}

