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
  
  $(document).ready(function() {
    $(".design").click(function() {
      $(".design").slideDown('1500').hide('1000');
      $(".design-content").show('1500');
    });

    $(".design-content").click(function() {
      $(".design-content").slideUp('1500');
      $(".design").slideDown('1500');
    });
  });

  $(document).ready(function() {
    $(".managment").click(function() {
      $(".managment").slideDown('1500').hide('1000');
      $(".managment-content").show('1500');
    });
    $(".managment-content").click(function() {
      $(".managment-content").slideUp('1500');
      $(".managment").slideDown('1500');
    });
  });