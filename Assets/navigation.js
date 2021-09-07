const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".upper-menu");
    const navLinks = document.querySelectorAll(".upper-menu li")

    burger.addEventListener('click', () => {
        nav.classList.toggle('upper-menu-active')

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation=""
            } else {link.style.animation = `navLinkFade 0.5 ease forwards ${index/7 + 2}s`}
            ;
    
            
        })

        burger.classList.toggle('toggle');
    } );

    

    
}

navSlide();
