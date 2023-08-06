// value of 1 means menu is closed. value of 0 means it is opened
let openOrClosed = 1;

// opens menu and rotates hamburger bars
function openMenu() {
  let headerWrapper = document.querySelector(".header-wrapper");
  let nav = document.querySelector("nav");
  let hamburgerBarOne = document.querySelector(".bar-1");
  let hamburgerBarTwo = document.querySelector(".bar-2");
  let hamburgerBarthree = document.querySelector(".bar-3");

  if (openOrClosed == 1) {
    headerWrapper.style.backgroundColor = "#232728";
    nav.style.transition ='0.5s ease';
    nav.style.left = "0";
    hamburgerBarthree.style.display = "none";
    hamburgerBarOne.style.transform = "rotate(45deg)";
    hamburgerBarTwo.style.transform = "rotate(-45deg)";
    hamburgerBarOne.style.marginBottom = "-10px";

    openOrClosed = 0;
  } else if (openOrClosed == 0) {
    headerWrapper.style.backgroundColor = "inherit";
    nav.style.transition ='0.5s ease';
    nav.style.left = "-20rem";
    hamburgerBarOne.style.transform = "rotate(0deg)";
    hamburgerBarOne.style.marginBottom = "0px";
    hamburgerBarTwo.style.transform = "rotate(0deg)";
    hamburgerBarthree.style.display = "block";
    openOrClosed = 1;
  } else;
}

var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

const links = document.querySelectorAll(".scroll-wrapper a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}



let readMoreExpand = document.querySelectorAll(".icons-wrapper-2");

readMoreExpand.forEach((item) => {
  let openOrClosedCounter = 1;
  item.addEventListener("click", function (e) {
    if (openOrClosedCounter == 1) {
      item.style.rotate = "180deg";

      item.nextElementSibling.style.height = "300px";

      openOrClosedCounter = 0;
    } else if (openOrClosedCounter == 0) {
      item.style.rotate = "initial";
      item.nextElementSibling.style.height = "0";
      openOrClosedCounter = 1;
    } else;
  });
});
