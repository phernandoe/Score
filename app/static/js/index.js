$(document).ready(function(){

    let index = 0;

    let genres = ["Classical", "Country", "Festival", "Jazz", "HipHop", "Rock"];

    let genresDict = {
        "Rock": "rgba(226, 125, 96, 0.9)",
        "HipHop":"rgba(133, 220, 176, 0.9)",
        "Festival":"rgba(195, 141, 158, 0.9)",
        "Jazz":"rgba(133, 220, 176, 0.9)",
        "Country":"rgba(232, 168, 124, 0.9)",
        "Classical":"rgba(124, 148, 232, 0.9)"
    };


    $(".background").css("background-color" , genresDict[genres[index]]);

    function throttle(func, limit) {
        let lastCall = 0;
        return function() {
            let now = Date.now();
            if (lastCall + limit < now) {
                lastCall = now;
                return func.apply(this, arguments);
            }
        }
    }

    window.addEventListener("wheel", throttle(function(scrollDirection){

        if (scrollDirection.deltaY > 0){
            index++;
        } else if (scrollDirection.deltaY <= 0){
            index--;
        }

        if (index > genres.length - 1 || index < 0) {
            index = 0;
        }

        $(".background").css("background-color" , genresDict[genres[index]]);
        $(".genreName").text(genres[index]).animate({'opacity':0}, 0.1);
        $(".genreName").text(genres[index]).animate({'opacity':1}, 800);
        $(".arrow").animate({top: "+=10"},250);
        $(".arrow").animate({top: "-=10"},250);

    }, 1500));

});