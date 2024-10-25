// the navbar
var menuIcon = document.querySelector('.nav-icon');
var navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    navbar.classList.toggle('hidden');
// hide about services + fix the homepage when click the berger menu
    document.querySelector('.body').classList.toggle('overflow-hidden');
    document.querySelector('.about').classList.toggle('hidden');
}
// intro video
document.querySelector('.intro').onclick = () => {
    document.querySelector('.intro-video').classList.remove('hidden');
    document.querySelector('.body').classList.add('overflow-hidden');
}
document.querySelector('.intro-video').onclick = () => {
    document.querySelector('.intro-video').classList.add('hidden');
    document.querySelector('.body').classList.remove('overflow-hidden');
}
// smooth scrool
// home
document.querySelector('.home').addEventListener('click',()=> {
    document.querySelector('#home').scrollIntoView({behavior:'smooth'});
})
// about
document.querySelector('.about').addEventListener('click',()=> {
    document.querySelector('#about').scrollIntoView({behavior:'smooth'});
})
// service
document.querySelector('.service').addEventListener('click',()=> {
    document.querySelector('#service').scrollIntoView({behavior:'smooth'});
})
// portfolio
document.querySelector('.portfolio').addEventListener('click',()=> {
    document.querySelector('#portfolio').scrollIntoView({behavior:'smooth'});
})
// team
document.querySelector('.team').addEventListener('click',()=> {
    document.querySelector('#team').scrollIntoView({behavior:'smooth'});
})
// testimonials
document.querySelector('.testimonials').addEventListener('click',()=> {
    document.querySelector('#testimonials').scrollIntoView({behavior:'smooth'});
})
// blog
document.querySelector('.blog').addEventListener('click',()=> {
    document.querySelector('#blog').scrollIntoView({behavior:'smooth'});
})
