// the navbar
var menuIcon = document.querySelector('.nav-icon');
var navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    navbar.classList.toggle('hidden');
}
// intro video
document.querySelector('.intro').onclick = () => {
    document.querySelector('.intro-video').classList.remove('hidden');
}
document.querySelector('.intro-video').onclick = () => {
    document.querySelector('.intro-video').classList.add('hidden');
}