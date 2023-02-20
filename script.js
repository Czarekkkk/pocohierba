const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");
const navLogo = document.querySelector("#navbar_logo");
const nav=document.querySelector(".navbar");

//wyswietlanie menu
const appears = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");

}

menu.addEventListener("click",appears);

const highlightMenu = () => {
    const highlight = document.querySelector(".highlight");
    const home = document.querySelector("#home_page");
    const about = document.querySelector("#about_page");
    const products = document.querySelector("#products_page");
    let scrollPosition = window.scrollY

    if(window.innerWidth > 960 && scrollPosition < 600){
        home.classList.add("highlight")
        about.classList.remove("highlight")
        return
    }
    else if(window.innerWidth > 960 && scrollPosition < 3900){
        about.classList.add("highlight")
        home.classList.remove("highlight")
        products.classList.remove("highlight")
        return
    }
  
    else if(window.innerWidth > 960 && scrollPosition < 5000){
        products.classList.add("highlight")
        about.classList.remove("highlight")
        return
    }
    
    if((highlight && window.innerWidth < 960 && scrollPosition < 600) || highlight){
        highlight.classList.remove("highlight")
    }
}

window.addEventListener("scroll",highlightMenu)
window.addEventListener("click",highlightMenu)