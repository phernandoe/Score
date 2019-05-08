$("#toggleNav").click(function() {
   $(this).text(($(this).text()  === '\u2630') ? 'x' : '\u2630');
   $(".slideNav").animate({width: "toggle"}, {duration: 400});
   $("nav").animate({width: "toggle"}, {duration: 0.1});
});