$(document).ready(function(){

  $("form").submit(function() {
      if ($('#username').val() === 'admin' && $('#password').val() === 'admin'){
          window.location = ("index");
      } else {
          alert("Login unsuccessful");
      }
      return false;
  });

});