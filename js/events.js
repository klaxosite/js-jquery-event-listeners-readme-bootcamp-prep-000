//define functions here
function getIt(){
  $('p').on('click', function() {alert("Hey!")});
}
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}
function pressIt(){
  $('#typing').on('keydown',
  function(e){
    if(e.which == 71){
      alert('g was pressed')
    }
  });
}
function submitIt(){
  $("form").on("submit", function(){
    if
  })
}
$(document).ready(function(){

getIt();
frameIt();

});
