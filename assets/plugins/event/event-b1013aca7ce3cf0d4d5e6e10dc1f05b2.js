!function(){function e(){jQuery(".event-plugin_event-block .event .title").each(function(e,n){var t=jQuery(n);console.log(t.height(),t.css("line-height")),t.height()>2*parseInt(t.css("line-height"))&&t.addClass("toobig")})}jQuery(document).ready(function(){e()})}();