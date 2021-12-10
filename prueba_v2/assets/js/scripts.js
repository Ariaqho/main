$(document).ready(function(){

    $().click(function(){
        var gato = this.hash

        $("html,body").animate(
            {
                scrolltop: $(gato).offset().top
            },
                800 
            )

    })




})

