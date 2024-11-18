//header
//dark color background when scrolled down
const header = document.querySelector('.header');
const headerHeight= header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if( window.scrollY > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
})

//home 
//transparent when scrolled down
const home= document.querySelector('.home__container');
const homeHeight= home.offsetHeight;
document.addEventListener('scroll', ()=> {
    console.log(1 - window.scrollY / homeHeight);
    home.style.opacity= 1 - window.scrollY / homeHeight;
})