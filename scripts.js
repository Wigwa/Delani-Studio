$(document).ready(function(){
    $(".development").click(function(){
      $(".development").slideDown('1500').hide('1000');
      $(".development-content").show('1500');
    });
    $(".development-content").click(function(){
      $(".development-content").slideUp('1500');
      $(".development").slideDown('1500');
    });
  });
  