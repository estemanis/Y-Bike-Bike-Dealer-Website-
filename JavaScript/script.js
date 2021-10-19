const imageCount = $(".article").length
const imageWidth = $(".article").width() + 20
const imageHeight = $(".article").height()
const totalWidth = imageWidth * imageCount

console.log(imageWidth)

$(".article-container").css({
    width: imageWidth*3,
    height: imageHeight,
})

$(".article").css({
    marginLeft: 10,
    marginRight: 10
})

$("#image-slider").css({
    width: totalWidth,
    marginLeft: -imageWidth
})

$(".article:last-child").prependTo("#image-slider")

$("#prev").click(() => {
    $("#image-slider").animate({
        left:imageWidth
    }, 1000, () => {
        $(".article:last-child").prependTo("#image-slider")
        $("#image-slider").css("left", "")
    })
})

$("#next").click(() => {
    $("#image-slider").animate({
        left:-imageWidth
    }, 1000, () => {
        $(".article:first-child").appendTo("#image-slider")
        $("#image-slider").css("left", "")
    })
})

const imageCount2 = $(".exhibition-image").length
const imageWidth2 = $(".exhibition-image").width() 
const imageHeight2 = $(".exhibition-image").height()
const totalWidth2 = imageWidth2 * imageCount2

$(".exhibition-image-container").css({
    width: imageWidth2,
    height: imageHeight2
})

$("#image-slider2").css({
    width: totalWidth2,
    marginLeft: -imageWidth2
})

$(".exhibition-image:last-child").prependTo("#image-slider2")

$("#prev2").click(() => {
    $("#image-slider2").animate({
        left:imageWidth2
    }, 1500, () => {
        $(".exhibition-image:last-child").prependTo("#image-slider2")
        $("#image-slider2").css("left", "")
    })
})

$("#next2").click(() => {
    $("#image-slider2").animate({
        left:-imageWidth2
    }, 1500, () => {
        $(".exhibition-image:first-child").appendTo("#image-slider2")
        $("#image-slider2").css("left", "")
    })
})
