
$(document).ready(main);

var contador = 1

function main(){
    $(".nav-responsive").click(function(){  
        if (contador == 1){
        $ ("nav").animate({
            right:"0" 
        });
        contador = 0;
    } else {
        contador = 1;
        $ ("nav").animate({
            right:"-100%"
        });

    }

});



}








