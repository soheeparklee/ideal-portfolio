//header
const header = document.querySelector('.header');
const headerHeight= header.getBoundingClientRect().height;
console.log(headerHeight);
document.addEventListener('scroll', () => {
    //when scrolled, make header transparent
    console.log(window.scrollY);
    const scrolledHeight= window.scrollY;
    if( scrolledHeight > headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark');
    }
})