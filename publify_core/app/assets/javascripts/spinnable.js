// Show and hide spinners on Ajax requests.
$(document).ready(function(){
  $(document).on('ajaxStart', function(evt, xhr, status){ $('#spinner').show();})
  $(document).on('ajaxStop', function(evt, xhr, status){ $('#spinner').hide();})
});
