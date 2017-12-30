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
        $('.img-responsive').hide();
      } else {
        $('#preciodiv').hide();
      }
      if ($('#filtrores').val() == 'locales abiertos') {
        $('#abiertodiv').show();
        $('.img-responsive').hide();
      } else {
        $('#abiertodiv').hide();
      }
      if ($('#filtrores').val() == 'valoracion') {
        $('#valdiv').show();
        $('.img-responsive').hide();
      } else {
        $('#valdiv').hide();
      }
      if ($('#filtrores').val() == 'orden alfabetico') {
        $('#alphord').show();
        $('.img-responsive').hide();
      } else {
        $('#alphord').hide();
      }XMLDocument
    });
  });
});

$('.elcolorao').on({
  'mouseover': function () {
    var src = ($(this).attr('src') === 'assets/images/elcolorao2.png')
      ? 'assets/images/elcolorao.png'
      : 'assets/images/elcolorao2.png';
    $(this).attr('src', src);
  }
});