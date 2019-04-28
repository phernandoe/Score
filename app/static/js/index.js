$(document).ready(function(){
    let artists = ["Rock", "Hip Hop", "Jazz", "Progressive", "Soul"];
    let index = 0;

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

        console.log(index);
        $(".genreNameHeader").text(artists[index]).animate({'opacity':0}, 0.1);
        $(".genreNameHeader").text(artists[index]).animate({'opacity':1}, 800);

    }, 2500));



});