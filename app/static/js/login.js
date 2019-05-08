$(document).ready(function(){

  $("form").submit(function() {
      if ($('#username').val() === 'admin' && $('#password').val() === 'admin'){
          window.location.replace("http://www.google.com/");
      } else {
          alert("Login unsuccessful");
      }
  });

});