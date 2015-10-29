$(function() {
    $(".shop-list figure").hover(function() {
        $(this).addClass("on").siblings("figure").removeClass("on");
    }).eq(0).addClass("on");

    //首页banner动画
    $(".show-slide-list").width("2000000000px")

    function adv() {
        var L = $(".show-slide-list figure").length;
        for (var i = 1; i <= L; i++) {
            var html = "<span> </span>";
            $(".show-slide .paging").append(html);
        }
        $(".show-slide-list figure").clone().appendTo($(".show-slide-list"));
        $(".show-slide .paging span").eq(0).addClass("on");
        var n = 0;

        function advshow() {
            $(".show-slide-list").animate({
                marginLeft: -1226 * (++n) + "px"
            }, 1000);
            $(".show-slide .paging span").removeClass("on");
            $(".show-slide .paging span").eq(n).addClass("on");
            if (n == L) {
                n = 0;
                $(".show-slide-list").animate({
                    marginLeft: -1226 * n + "px"
                }, 0)
                $(".show-slide .paging span").removeClass("on")
                $(".show-slide .paging span").eq(n).addClass("on")
            }
        }
        var setInt = setInterval(advshow, 4000);
        $(".show-slide").hover(function() {
            clearTimeout(setInt);
        }, function() {
            setInt = setInterval(advshow, 4000);
        })
        $(".show-slide .prev").click(function() {

            if (n == 0) {
                n = L;
                $(".show-slide-list").animate({
                    marginLeft: -1226 * n + "px"
                }, 0);
                $(".show-slide .paging span").removeClass("on");
                $(".show-slide .paging span").eq(0).addClass("on");
            } else if (n == -1) {
                n = L - 1
                $(".show-slide-list").animate({
                    marginLeft: -1226 * n + "px"
                }, 0);
                $(".show-slide .paging span").removeClass("on");
                $(".show-slide .paging span").eq(n).addClass("on");
            }
            $(".show-slide-list").animate({
                marginLeft: -1226 * (--n) + "px"
            }, 1000);
            $(".show-slide .paging span").removeClass("on");
            $(".show-slide .paging span").eq(n).addClass("on");
        })
        $(".show-slide .next").click(function() {
            advshow();
        });
        $(".show-slide .paging span").click(function() {
            var ii = $(this).index()
            n = ii
            $(".show-slide-list").animate({
                marginLeft: -1226 * (n) + "px"
            }, 1000)
            $(".show-slide .paging span").removeClass("on")
            $(".show-slide .paging span").eq(n).addClass("on")
        })
    }
    adv();

})
