console.log("test");

$(document).ready(function() {
    $(".icon").on("click", function() {
        $(".search").toggleClass("active");
    });
});