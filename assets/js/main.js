const ToggleOpen = document.getElementById("Toggle-open")
const ToggleClose = document.getElementById("Toggle-close");
const Menu = document.getElementById("nav-menu")
const Head = document.getElementById("head")
const Links = document.querySelectorAll(".header__option-link")
    if(ToggleOpen) {
        ToggleOpen.addEventListener("click", ()=> {
           Menu.classList.toggle("Show-menu")
        })
    }

    if(ToggleClose){
        ToggleClose.addEventListener("click", ()=> {
            Menu.classList.remove("Show-menu")
        })
    }

    function DisableMenu (){
        const Menu = document.getElementById("nav-menu");
        Menu.classList.remove("Show-menu")
    }

    
    //Swipper

    const swiper = new Swiper(".main__swiper",{
        loop:"true",
        spaceBetween:600,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
          }
    })

    const NSwipper = new Swiper(".new__swipper",{
       spaceBetween:15,
       centeredSlides:true,
       slidesPerView:"auto",
       loop:"true"
       
       
    })

Links.forEach(item=>item.addEventListener("click",DisableMenu));
const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:1000,
    delay:300

})

sr.reveal(`.page__main, .page__categories, .page__footer`);
sr.reveal(`.trick-or-threat__card`,{interval:120})

sr.reveal(`.about__more, .discount__card-img`,{origin:"left"})

sr.reveal(`.about__img, .discount__header`,{origin:"right"})




function ScrollUp () {
const scrollUp = document.getElementById("scroll-up");

if (this.scrollY>= 460) {
    scrollUp.classList.add("show-up")
} else {
    scrollUp.classList.remove("show-up")
}
}

window.addEventListener("scroll" , ScrollUp())