$(document).ready(function() {
    t();
        function t() {
            if ($(window).width() > 850) {
                var t = 0,
                    e = !1;
                $(window).scroll(function() {
                    var i = $(this).scrollTop();
                    i > 400 ? ($("header").addClass("sticky slidedown"), t = 1, e = !1) : 400 > i && 1 == t && 0 == e && ($("header").removeClass("slidedown").addClass("slideup"), setTimeout(function() {
                        $("header").removeClass("sticky slideup slidedown")
                    }, 200), e = !0)
                }), $(".services-btn").click(function(t) {
                    t.preventDefault();
                    var e = $(this).data("contact-type");
                    $("html,body").animate({
                        scrollTop: $("footer").offset().top - 90
                    }, function() {
                        $(".contact-type.right").click(), $(".project-type-box[data-project-type='" + e + "']").click()
                    })
                })
            }
        }
});