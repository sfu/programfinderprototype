 (function($) {
    $(document).ready(function() {
        $('.toggleContent')
        .hide()
        .click(function(e) {
            e.stopPropagation();
        });
        $('.toggle a').click(function(ev) {
            ev.preventDefault();
            var trigger = $(this),
            parent = trigger.first().parent()[0],
            classes = parent.className,
            targetclass = classes.match(/item\d+/)[0],
            content = $('.toggleContent.' + targetclass);
            if (content.is(':visible')) {
                content.slideUp(function() {
                    trigger.css('background-position', '0px 3px'); // Show [+]
                });
            } else {
                trigger.css('background-position', '0px -186px'); // Show [-]
                content.slideDown();
            }
        });
    });
})(jQuery);