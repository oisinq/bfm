$(document).ready(function(){

  $("#radio1").click(function (){
        if ($(this).is(':checked')) {
          document.getElementById('portrait').src='../images/bfmcom.jpg';
        }
  });

  $("#radio2").click(function (){
        if ($(this).is(':checked')) {
          document.getElementById('portrait').src='../images/peter.jpg';
        }
  });

});
