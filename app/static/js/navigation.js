$("#toggleNav").click(function() {
   $(this).text(($(this).text()  === 'x') ? '\u2630' : 'x');
   $(".slideNav").animate({width: "toggle"}, {duration: 400});
   $("nav").animate({width: "toggle"}, {duration: 0.1});
});