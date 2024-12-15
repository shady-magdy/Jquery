/// <reference types="../@types/jquery" />
let about = $("#about").offset().top
$(window).scroll(function (e) {
    let scrol = $(window).scrollTop()
    if (scrol > about) {
        $(".navbar").addClass("bg-dark").removeClass("bg-transparent")
    } else {
        $(".navbar").addClass("bg-transparent").removeClass("bg-dark")
    }
})
$(".nav-link").click(function (e) {
    $(e.target).addClass("active")
    // $(e.target).parent().siblings().children().removeClass("active")
    $(".nav-link").not(e.target).removeClass("active")
})
$(".nav-link").click(function (e) {
    let href = $(e.target).attr("href")
    let offsettop = $(href).offset().top
    $("body,html").animate({ scrollTop: offsettop }, {
        duration: 1000,
        queue: false
    })
})
$(".box").on("click", function (e) {
    let bg = $(e.target).css("background-color")
    $(":root").css("--mainColor", bg)
    localStorage.setItem("fcolor", bg)
})
if (localStorage.getItem("fcolor") != undefined) {
    $(":root").css("--mainColor", localStorage.getItem("fcolor"))
}
$("#imagebox").click(function (e) {
    let image = $(e.target).attr("src")
    $("header").css("background-image", `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)) ,  url(${image})`)
    localStorage.setItem("fimage", image)
})
if (localStorage.getItem("fimage") != undefined) {
    $("header").css("background-image", `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)) ,  url(${localStorage.getItem("fimage")})`)
}
$(".settingg").click(function () {
    let width = $(".inner").outerWidth()
    let y = $("#settings").css("left")
    if (y == "0px") {

        $("#settings").animate({ left: `-${width}px` }, 100)
    } else {
        $("#settings").animate({ left: "0px" }, 100)
    }
})
$(document).ready(function () {
    $(".loading").slideUp(1000, function () {
        $(".loading").removeClass("d-flex")
    })
})
