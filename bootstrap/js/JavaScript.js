
//nav foucos effect

function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}


/*
    Stop / Start carousel autoplay
*/
$(function () {
    $('#carouselExampleIndicators').carousel({
        interval: 3000,
        pause: "false"
    });
    $('#playButton').click(function () {
        $('#carouselExampleIndicators').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#carouselExampleIndicators').carousel('pause');
    });
});