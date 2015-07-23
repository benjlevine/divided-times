$(document).ready(function () {

  $('#primary-nav li').click(function(e) {
    e.preventDefault();

    // toggle active class on button
    $(this).toggleClass('active');
    // make sure all others are off
    $(this).siblings().removeClass('active');

    // if the button is now active
    if($(this).hasClass('active')) {
      // open subnav container
      $('#slide-down').show();
      // hide all subnavs
      $('section.drop').hide();
      // show this subnav
      var section = $(this).children('a').attr('href');
      $(section).show();

    // if button is now inactive
    } else {
      // hide subnav container
      $('#slide-down').hide();
    }
  });
});
