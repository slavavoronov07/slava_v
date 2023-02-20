$("body").on("click", ".my-img", function () {
  $("#main").attr("src", $(this).attr("src"));
  // для кнопок нужно использовать миниатюры.
 
  
});



$(document).ready(function() {
$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val())+1);
    $input.change();
    return false;
  });
});

$(".sizeinput").on("change",sizeinput_input);
function sizeinput_input(e) {
    $("div.result").text(+this.value* +$("span.constanta").text());
}








jQuery(document).ready(function($) {
  $('.spoiler_title').click(function() {
     $(this).parents('.spoiler_wrap').find('.spoiler_content').toggleClass('open');
         $(this).parents('.spoiler_wrap').find('.spoiler_arrow').toggleClass('open');
  });
});




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}