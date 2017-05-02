$(document).ready(function() {
  $('#js--mobile-menu').on('click', function() {
    $('.nav--ul').toggle();
  });
  $('#js--open-under-menu').on('click', function() {
    $('.nav--ul-under-menu').toggle();
  });
  $('#js--box--path-red').hover(function() {
    $('.box--text-red').slideToggle();
  });
  $('#js--box--path-yellow').hover(function() {
    $('.box--text-yellow').slideToggle();
  });
  $('#js--box--path-pink').hover(function() {
    $('.box--text-pink').slideToggle();
  });
  $('#js--box--path-white').hover(function() {
    $('.box--text-white').slideToggle();
  });
});
