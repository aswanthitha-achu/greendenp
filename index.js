//selecting elements

var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function (params) {
    sidenav.style.right=0
})
closenav.addEventListener("click", function (params) {
    sidenav.style.right="-50%"
})

var container = document.getElementById("productcontainer")
var searchbar = document.getElementById("searchbar")
var divlist = productcontainer.querySelectorAll("div")

searchbar.addEventListener("keyup", function () {
    var enteredvalue = event.target.value

    for (count=0; count<divlist.length; count=count+1){
        var productname = divlist[count].queryselector("h3").textcontent    
    }

        if (productname.toUpperCase().indexof(enteredvalue)<0) {
            divlist[count].style.display = "none"
        } else {
            divlist[count].style.display = "block"
        }
}

)