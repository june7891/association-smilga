let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('show');
});

let link = document.querySelector('.menu');

link.addEventListener('click', function() {
    body.classList.remove('show');
})


function changeNavBg() {
    let navBar = document.getElementById('navbar');
    let scrollValue = window.scrollY;
    if(scrollValue > 200) {
        navBar.classList.add('bgColor');
    } else {
        navBar.classList.remove('bgColor');
    }
    

}

window.addEventListener('scroll', changeNavBg);