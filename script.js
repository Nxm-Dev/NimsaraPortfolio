let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

// Handle scroll events
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Make header sticky after scrolling past 100px
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Handle menu toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

// Close the menu when a nav link is clicked
navlink.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        nav.classList.remove('active');
    });
});

// ScrollReveal configurations
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