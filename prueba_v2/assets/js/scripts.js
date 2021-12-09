$(document).ready(function(){

    $(a).click(function(){
        var hashtag = this.hash

        $("html,body").animate(
            {
                scrolltop: $(gato).offset().top
            },
                800
            )

    })




})