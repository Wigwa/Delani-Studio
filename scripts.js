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
  $(document).ready(function(){
    $(".wrk1").mouseover(function(){
      $(".par").show();
    }).mouseout(function(){
      $(".par").hide();
    });
  });
  $(document).ready(function(){
    $(".wrk2").mouseover(function(){
      $(".par2").show();
    }).mouseout(function(){
      $(".par2").hide();
    });
  });
  $(document).ready(function(){
    $(".wrk3").mouseover(function(){
      $(".par3").show();
    }).mouseout(function(){
      $(".par3").hide();
    });
  });
  $(document).ready(function(){
    $(".wrk4").mouseover(function(){
      $(".par4").show();
    }).mouseout(function(){
      $(".par4").hide();
    });
  });
  
  $(document).ready(function(){
    $(".wrk5").mouseover(function(){
      $(".par5").show();
    }).mouseout(function(){
      $(".par5").hide();
    });
    $(".wrk6").mouseover(function(){
      $(".par6").show();
    }).mouseout(function(){
      $(".par6").hide();
    });
    $(".wrk7").mouseover(function(){
      $(".par7").show();
    }).mouseout(function(){
      $(".par7").hide();
    });
    $(".wrk8").mouseover(function(){
      $(".par8").show();
    }).mouseout(function(){
      $(".par8").hide();
    });
  });
  
  $(document).ready(function(){
    $("form#form34A").submit(function(event){
       event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });
