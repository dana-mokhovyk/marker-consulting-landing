  $(function() {
    $("[data-target]").click(function(event) {
      event.preventDefault();

      const offsetTop =  $(`[data-anchor=${$(this).attr('data-target')}]`).offset().top;
      const additionalOffset = $(this).attr('data-offset') - 0;

      $([document.documentElement, document.body]).animate({
        scrollTop: offsetTop + additionalOffset
      }, 1000);
    });
  });
