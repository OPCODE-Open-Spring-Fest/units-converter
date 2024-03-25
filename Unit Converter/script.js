//Javascript for index.html will be written here

let unit = document.querySelector(".unit");
let links = document.getElementsByClassName("link");
let moon = document.querySelector(".fa-moon");
let navBar = document.querySelector(".navbar");
let footer = document.querySelector("footer");
console.log(links[0]);

function hoverInWhiteMode() {
  links[0].style.backgroundColor = "gray";
  links[0].style.color = "black";
  for (let i = 1; i < links.length; i++) {
    links[i].addEventListener("mouseenter", (e) => {
      links[0].style.backgroundColor = "#E5DBCC";
      e.target.style.backgroundColor = "gray";
    });

    links[i].addEventListener("mouseleave", (e) => {
      links[0].style.backgroundColor = "gray";
      e.target.style.backgroundColor = "#E5DBCC";
    });
  }
}

function hoverInDarkMode() {
  links[0].style.backgroundColor = "#ffffff";
  links[0].style.color = "black";
  for (let i = 1; i < links.length; i++) {
    links[i].addEventListener("mouseenter", (e) => {
      links[0].style.backgroundColor = "black";
      links[0].style.color = "#ffffff";
      e.target.style.backgroundColor = "#ffffff";
      e.target.style.color = "black";
    });

    links[i].addEventListener("mouseleave", (e) => {
      links[0].style.backgroundColor = "#ffffff";
      links[0].style.color = "black";
      e.target.style.backgroundColor = "black";
      e.target.style.color = "#ffffff";
    });
  }
}

hoverInWhiteMode();

let click = 1;
moon.addEventListener("click", (e) => {
  console.log("Abhay");

  if (click === 1) {
    click = 0;
    navBar.style.backgroundColor = "black";
    unit.style.color = "#ffffff";
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#ffffff";
    }
    hoverInDarkMode();
    moon.style.color = "#ffffff";
    footer.style.color = "#ffffff";
    footer.style.backgroundColor = "black";
  } else {
    click = 1;
    navBar.style.backgroundColor = "#E5DBCC";
    unit.style.color = "black";
    hoverInWhiteMode();
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "black";
    }
    moon.style.color = "black";
    footer.style.color = "gray";
    footer.style.backgroundColor = "#ffffff";
  }
});
