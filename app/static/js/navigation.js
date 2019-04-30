$("#toggleNav").click(function() {
   $(".slideNav").animate({width: "toggle"}, {duration: 400});
   $("nav").animate({width: "toggle"}, {duration: 0.1});
});