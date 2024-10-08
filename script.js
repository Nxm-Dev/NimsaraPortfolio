let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

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
            })
        }
    })


    // toggle menu
    let menuIcon = document.querySelector('#menu-icon');
    let nav = document.querySelector('.navbar');



    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        nav.classList.toggle('active');
    }




    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon Nav bar when click nav bar link

    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');
}

// Scrolling Changes

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 50
})

ScrollReveal().reveal('.home-content,.heading ,.portfolio-box2', { origin: 'top' });
ScrollReveal().reveal('.services-container ,.about-content, .contact form ,.portfolio-box5', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio-box1,.portfolio-box4', { origin: 'left' });
ScrollReveal().reveal('.portfolio-box3,.portfolio-box6', { origin: 'right' });