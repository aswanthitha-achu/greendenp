var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function (params) {
    sidenav.style.right=0
})
closenav.addEventListener("click", function (params) {
    sidenav.style.right="-50%"
})