//Javascript for index.html will be written here
//Javascript for index.html will be written here

let links = document.getElementsByClassName("link");
let hamLinks = document.getElementsByClassName("hamlink");
let moon = document.querySelector(".fa-moon");
let footer = document.querySelector("footer");
let mainContent = document.querySelector(".main-content");
let bars = document.querySelector(".fa-bars");
let hamBurger = document.getElementById("hamburger");
console.log(links[0]);

function hoverInWhiteMode() {
  links[0].style.backgroundColor = "gray";
  links[0].style.color = "black";
  for (let i = 1; i < links.length; i++) {
    links[i].addEventListener("mouseenter", (e) => {
      links[0].style.backgroundColor = "#E5DBCC";
      links[0].style.color = "black";
      e.target.style.backgroundColor = "gray";
    });

    links[i].addEventListener("mouseleave", (e) => {
      links[0].style.backgroundColor = "gray";
      e.target.style.backgroundColor = "#E5DBCC";
      e.target.style.color = "black";
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
  
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "#ffffff";
      links[i].style.backgroundColor = "black";
    }
    hoverInDarkMode();
    mainContent.style.backgroundColor = "#798d7a";
    moon.style.color = "#ffffff";
    bars.style.color = "#ffffff";
    footer.style.color = "#ffffff";
    footer.style.backgroundColor = "black";
  } else {
    for (let i = 0; i < links.length; i++) {
      links[i].style.backgroundColor = "#E5DBCC";
      links[i].style.color = "black";
    }
    hoverInWhiteMode();
   
    
    moon.style.color = "black";
    bars.style.color = "black";
    mainContent.style.backgroundColor = "#867285";
    footer.style.color = "gray";
    footer.style.backgroundColor = "#ffffff";
    click = 1;
  }
});

bars.addEventListener("click", (e) => {
  // console.log("Abhay");
  if (click === 1) {
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-xmark");
    bars.classList.add("fa-2.5x");
    bars.style.marginRight = "10px";
    // hamBurger.style.display = "block"
    hamBurger.style.height = "50vh";
    for(let i = 0; i < hamLinks.length; i++)
    {
      hamLinks[i].style.display = "block";
      hamLinks[i].style.height = "50vh";
      hamLinks[i].style.transition = "height 10s ease-in-out";
      hamLinks[i].style.display = "flex";
      hamLinks[i].style.justifyContent = "center";
      hamLinks[i].style.alignItems = "center";
      hamLinks[i].style.color = "black";
      hamLinks[i].style.textDecoration = "none";
      hamLinks[i].style.fontWeight = "500";
    }

    hamLinks[0].style.opacity = "1";
    hamLinks[0].style.transition = "opacity 0.08333s easeInOut";

    hamLinks[1].style.opacity = "1";
    hamLinks[1].style.transition = "opacity 0.16666s easeInOut";

    hamLinks[2].style.opacity = "1";
    hamLinks[2].style.transition = "opacity 0.25s easeInOut";

    hamLinks[3].style.opacity = "1";
    hamLinks[3].style.transition = "opacity 0.33333s easeInOut";

    hamLinks[4].style.opacity = "1";
    hamLinks[4].style.transition = "opacity 0.41666s easeInOut";

    hamLinks[5].style.opacity = "1";
    hamLinks[5].style.transition = "opacity 0.5s easeInOut";
    click = 0;
  } else {
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
    bars.style.zIndex = 10;
    hamBurger.style.height = 0;
    for(let i = 0; i < hamLinks.length; i++)
    {
      hamLinks[i].style.display = "none";
      hamLinks[i].style.height = "0vh";
      hamLinks[i].style.transition = "height 0.5s easeInOut";
    }

    hamLinks[0].style.opacity = "0";
    hamLinks[0].style.transition = "opacity 0.08333s easeInOut";
    click = 1;
  }
});

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
