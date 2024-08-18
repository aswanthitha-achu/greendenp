var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function (params) {
    sidenav.style.right=0
})
closenav.addEventListener("click", function (params) {
    sidenav.style.right="-50%"
})

var container = document.getElementById("productcontainer");
var searchbar = document.getElementById("searchbar");
var divlist = container.querySelectorAll("div");

searchbar.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toLowerCase();

    for (var count = 0; count < divlist.length; count++) {
        var productname = divlist[count].querySelector("h3").textContent.toLowerCase();

        if (productname.indexOf(enteredvalue) < 0) {
            divlist[count].style.display = "none";
        } else {
            divlist[count].style.display = "block";
        }
    }
});
