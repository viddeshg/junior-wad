jQuery(document).ready(function ($) {

  var $toggle = $('.nav-toggle');
  var $menu = $('.nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });

    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $(".button-collapse").sideNav();

      $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');
  $('.modal').modal();

});

