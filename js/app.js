$(document).ready(function () {

  /**Splash*/
  $('.title').delay(2000).fadeOut("slow");

  $(function () {
    $('#preciodiv').hide();
    $('#alphord').hide();
    $('#valdiv').hide();
    $('#filtrores').change(function () {
      if ($('#filtrores').val() == 'price') {
        $('#preciodiv').show();
        $('.foodimages').hide();
      } else {
        $('#preciodiv').hide();
      }
      if ($('#filtrores').val() == 'locales abiertos') {
        $('#abiertodiv').show();
        $('.foodimages').hide();
      } else {
        $('#abiertodiv').hide();
      }
      if ($('#filtrores').val() == 'valoracion') {
        $('#valdiv').show();
        $('.foodimages').hide();
      } else {
        $('#valdiv').hide();
      }
      if ($('#filtrores').val() == 'orden alfabetico') {
        $('#alphord').show();
        $('.foodimages').hide();
      } else {
        $('#alphord').hide();
      }XMLDocument
    });
  });
});

 /*Modales*/
$('.elcolorao').on({
  'mouseover': function () {
    var src = ($(this).attr('src') === 'assets/images/elcolorao2.png')
      ? 'assets/images/elcolorao.png'
      : 'assets/images/elcolorao2.png';
    $(this).attr('src', src);
  }
});
$('.foodwang').on({
  'mouseover': function() {
       var src = ($(this).attr('src') === 'assets/images/wang2.png')
          ? 'assets/images/wang.png'
          : 'assets/images/wang2.png';
       $(this).attr('src', src);
  }
});