

setTimeout(()=>{
$('.mat-horizontal-stepper-header-container').css("position",'absolute');
$('.mat-horizontal-stepper-header-container').css("z-index",'99');
$('.mat-horizontal-stepper-header-container').css("width",'100%');
$('.mat-card.mat-focus-indicator ').css("padding-top",'0');
$('.mat-card.mat-focus-indicator ').css("padding-left",'0');
$('.mat-card.mat-focus-indicator ').css("padding-right",'0');
$('.mat-card.mat-focus-indicator ').css("padding-bottom",'0');
$('.mat-horizontal-content-container ').css("padding-top",'0');
$('.mat-horizontal-content-container ').css("padding-left",'0');
$('.mat-horizontal-content-container ').css("padding-right",'0');
$('.mat-horizontal-content-container ').css("padding-bottom",'0');

$('.expandHome').mouseover(function() {
    $('.sub-home').css({
          'display': 'block'
      }); 
  });
  $('.subnavbtn').mouseover(function() {
    $('.sub-home').css({
          'display': 'none'
      }); 
  });
  
  $('#trapezoid').mouseleave(function() {
    $('#trapezoid').css({
          'margin-top': '-53px'
      }); 
      $('.sub-home').css({
          'display': 'none'
      }); 
  }).mouseenter(function() {
    $('#trapezoid').css({
          'margin-top': '0px'
      }); 
  });
                
  

// mat-horizontal-content-container ng-tns-c118-0 ng-star-inserted
},1000)
