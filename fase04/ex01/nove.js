function nove(x) {
    
    ud = x.toString().substr( -1 , 1 );
    if(ud == "9") {
        return "true";
    }
    else if(ud != "9") {
        return "false"
    }
}
