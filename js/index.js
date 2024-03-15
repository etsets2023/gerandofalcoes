//////////////////////////////////////BTN MOBILE//////////////////////////////////////////////////////////
const btnMobile = document.querySelector('#btn_mobile');

function toggleMenu(){
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);







//////////////////////////////////////DATA ANIME////////////////////////////////////////////////////////////
const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add('animate')
        } else {
            element.classList.remove('animate');
        }
    })
}
animeScroll()

window.addEventListener('scroll', () =>{
    animeScroll();
})

//////////////////////////////////////////FECHA DATA ANIME///////////////////////////////////////////////////