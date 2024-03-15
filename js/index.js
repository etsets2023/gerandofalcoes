//////////////////////////////////////BTN MOBILE//////////////////////////////////////////////////////////
const btnMobile = document.querySelector('#btn_mobile');

function toggleMenu(){
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
//////////////////////////////////////BTN MOBILE//////////////////////////////////////////////////////////


//////////////////////////////////////UL INSTITUCIONAL/////////////////////////////////////////////////////
const linkInstitucional = document.querySelector('.link_institucional');
const ulInstitucional = document.querySelector('.ul_institucional');

linkInstitucional.addEventListener('click', () =>{
    ulInstitucional.classList.toggle('show')
})

linkInstitucional.addEventListener('blur', () =>{
    ulInstitucional.classList.remove('show')
})

//////////////////////////////////////FECHA INSTITUCIONAL/////////////////////////////////////////////////////


//////////////////////////////////////UL PROJETOS/////////////////////////////////////////////////////
const linkProjetos = document.querySelector('.link_projetos');
const ulProjetos = document.querySelector('.ul_projetos');

linkProjetos.addEventListener('click', () =>{
    ulProjetos.classList.toggle('show')
})

linkProjetos.addEventListener('blur', () =>{
    ulProjetos.classList.remove('show')
})
//////////////////////////////////////FECHA PROJETOS/////////////////////////////////////////////////////


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