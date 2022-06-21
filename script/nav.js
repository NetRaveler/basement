// Right tab navigation

$(function() {
    $('nav').each(function() {
        var $active, $content, $links = $(this).find('a');

        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        $links.not($active).each(function() {
            $(this.hash).hide();
        });

        $(this).on('click', 'a', function(e) {
            $active.removeClass('active');
            $content.hide();

            $active = $(this);
            $content = $(this.hash);

            $active.addClass('active');
            $content.show();

            e.preventDefault();
        });
    });
});

// Left tab navigation

$(function() {
    $('nav1').each(function() {
        var $active, $contentleft, $links = $(this).find('a');

        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('active');

        $contentleft = $($active[0].hash);

        $links.not($active).each(function() {
            $(this.hash).hide();
        });

        $(this).on('click', 'a', function(e) {
            $active.removeClass('active');
            $contentleft.hide();

            $active = $(this);
            $contentleft = $(this.hash);

            $active.addClass('active');
            $contentleft.show();

            e.preventDefault();
        });
    });
});