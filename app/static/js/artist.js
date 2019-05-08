$(document).ready(function(){
    let artists = ["Butter", "Daughters", "Rihanna", "xxyyxx", "Getter"];
    let genres = ["Rock", "Hip Hop", "Jazz", "Progressive", "Soul"];
    let index = 0;

    $(".background").css("background-color" , "rgba(226, 125, 96, 0.9)");

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

        if (index > artists.length - 1 || index < 0) {
            index = 0;
        }

        $(".genreName").text(genres[index]).animate({'opacity':0}, 0.1);
        $(".genreName").text(genres[index]).animate({'opacity':1}, 800);

        $(".artistName").text(artists[index]).animate({'opacity':0}, 0.1);
        $(".artistName").text(artists[index]).animate({'opacity':1}, 800);

    }, 1500));



});