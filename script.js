let menuBtn = document.querySelector(".menu-btn");
let bars = document.querySelector(".bars");
let navBar = document.querySelector("ul");

menuBtn.addEventListener("click", function (e) {
    if (bars.innerHTML !== "X") {
        bars.innerHTML = "X";
        bars.style.paddingRight = "5px";
        navBar.style.display = "grid";

    } else {
        bars.innerHTML = '<div class="bar1"></div><div class="bar2"></div><div class="bar3"></div>'
        navBar.style.display = "none";
    }

});

// if nav if off and screen is above 1000px it is not visiable
 