let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');


window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });

    
    document.querySelector('header').classList.toggle('sticky', top > 100);
};


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        nav.classList.remove('active');
    });
});



ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.home-content,.heading ,.portfolio-box2', { origin: 'top' });
ScrollReveal().reveal('.services-container ,.about-content, .contact form ,.portfolio-box5', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio-box1,.portfolio-box4', { origin: 'left' });
ScrollReveal().reveal('.portfolio-box3,.portfolio-box6', { origin: 'right' });


const SheduleMeet = () => {
    window.location.href = "https://calendar.google.com/calendar/u/0/r/eventedit?vcon=meet&dates=now&hl=en&pli=1";
}
