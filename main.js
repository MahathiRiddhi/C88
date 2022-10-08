var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var mouseEvent = "empty"
var lastX, lastY, currentX, currentY
var color="pink"

canvas.addEventListener("mousedown", mouseDownfn)
canvas.addEventListener("mouseup", mouseUpfn)
canvas.addEventListener("mouseleave", mouseLeavefn)
canvas.addEventListener("mousemove", mouseMovefn)

function mouseDownfn(e) {
    mouseEvent = "mousedown"
    color= document.getElementById("color").value
    width = document.getElementById("lineWidth").value
}

function mouseUpfn(e) {
    mouseEvent = "mouseup"
}

function mouseLeavefn(e) {
    mouseEvent = "mouseleave"
}

function mouseMovefn(e) {
    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop
    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()
    }
    lastX = currentX
    lastY = currentY

}
function clearCanvas() {
ctx.clearRect(0,0,canvas.width,canvas.height)
}
