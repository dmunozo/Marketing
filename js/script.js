

/*
Daniel Munoz Ortiz

Description:
Slow web, magic realism, illustration.
*/

$(document).ready(function() {


scroll_color() //controls the change of color when scrolling
button_start() //controls the start button, color and actions
mango(); //Blurs and unblurs the mango on the tree.


});

function scroll_color(){ //-------------------------------> Scroll_color
//Scrolling elements
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
  triggerElement: "body",
  duration: 500
});

//Change color of background when scrolling down
scene.setTween("body", 05, {
    "backgroundColor": "white",
});

  scene.triggerHook(0.9);
  scene.addTo(controller);

}

function mango(){ //--------------------------------------> Mango
//Add blur to the mango on page 1

  $('#mango').addClass('blur');

//When hover over the mango, remove blur
  $('#mango').hover(function () {
    $(this).removeClass('blur');
  },function () {
  });

}

function button_start(){ //-------------------------------> button_start
//Start story button change color when hover
    $("#button_start").hover(function(){
      $(this).css("background-color", "#911448");
    },function () {
      $(this).css("background-color", "#ce1c4c");
    });
}
