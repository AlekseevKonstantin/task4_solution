$(document).ready(function(){

  $('.nav-pills > li').on('click', function(e){

    e.preventDefault();

    var navPillsItemNum = $(this).attr('data-nav-pills-item');
    var tableWrapper = $('.table-wrapper[data-item-num="'+navPillsItemNum+'"]');

    $('.nav-pills > li').removeClass('active');
    $('.table-wrapper').removeClass('active');

    $(this).addClass('active');
    $(tableWrapper).addClass('active');
  });
  
})