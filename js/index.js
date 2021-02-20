$(window).on('scroll', function() {
    if ($(".content-image.image-right").is(':visible')) {
        $(".content-image.image-right").addClass("loaded");
    }
    if ($(".content-image.image-left").is(':visible')) {
        $(".content-image.image-left").addClass("loaded");
    }
});