$(document).ready(function(){
  $('.menu-toggle').on('click',function(){
    $('.menu-toggle').toggleClass('active');
    $('.bottom').toggleClass('expanded');
    $('.top').toggleClass('expanded');
  });
});
