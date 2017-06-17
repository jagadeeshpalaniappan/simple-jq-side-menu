
$(document).ready(function () {

    // *************** Side Menu *******************

    $("#sideMenuBtn").click(function () {
        var body = $("body").toggleClass("sidemenu-minimized");

        if (body.hasClass("sidemenu-minimized")) {
            $(".sidemenu .hide-on-small-menu").hide();
            $(".sidemenu .collapse").removeClass('in');
        } else {
            $(".sidemenu .hide-on-small-menu").show();
        }

    });

    // *************** / Side Menu ******************

});
