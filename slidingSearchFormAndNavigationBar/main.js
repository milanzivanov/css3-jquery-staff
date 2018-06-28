console.log("test");

$(document).ready(function() {
    $(".search-icon").on("click", function() {
        $(".search").slideToggle()
    });
    $(".close").on("click", function() {
        $(".search").slideToggle()
    });
});