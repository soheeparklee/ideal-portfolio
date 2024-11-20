//header
//dark color background when scrolled down
const header = document.querySelector('.header');
const headerHeight= header.getBoundingClientRect().height;
//arrow
//show when scolled down
const arrow= document.querySelector('.arrow_up')
const arrowHeight= arrow.offsetHeight;
document.addEventListener('scroll', () => {
    if( window.scrollY > headerHeight){
        header.classList.add('header--dark');
        arrow.classList.add('arrow--show');
    }else{
        header.classList.remove('header--dark');
        arrow.classList.remove('arrow--show');
    }
})

//home 
//transparent when scrolled down
const home= document.querySelector('.home__container');
const homeHeight= home.offsetHeight;
document.addEventListener('scroll', ()=> {
    home.style.opacity= 1 - window.scrollY / homeHeight;
})


//navbar button toggle
const navbarMenu= document.querySelector('.header__menu');
const navbarToggle= document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
})
//navbar button close
navbarMenu.addEventListener('click', ()=>{
    navbarMenu.classList.remove('open');
})