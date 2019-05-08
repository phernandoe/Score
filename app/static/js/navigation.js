$("#toggleNav").click(function() {
   $(this).text(($(this).text()  === '\u2669') ? '\u266B' : '\u2669');

   $(".slideNav").animate({width: "toggle"}, {duration: 400});
   $("nav").animate({width: "toggle"}, {duration: 0.1});
});