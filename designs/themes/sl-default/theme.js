jQuery(document).ready(function(){
  if ( $('.profile-name-is-portal .event-plugin_event-block span.days-left.past').length ) {
    $('.event-plugin_event-block span.days-left.past').each(function() {
      var element = $(this);
      element.parents('li').css('opacity', '0.3')
    });
  };
});
