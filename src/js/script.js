document.addEventListener('DOMContentLoaded', function () {
    // первая карусель
    const slider1 = tns({
        container: '.shop__wrapper',
        items: 4,
        slideBy: 'page',
        autoplay: true,
        gutter: 22,
        slideBy: 1,
        controlsContainer: '#custom-control2',
        autoplayButtonOutput: false,
        navAsThumbnails: true,
        responsive: {
            0: {
                items: 1,
                controls: false,
            },
            540: {
                items: 2,
            },
            840: {
                items: 3,
                controls: true,
            },
            1201: {
                items: 4,

            }
        }
    });

    // остановка карусели при наведении мыши
    const sliderContainer = document.querySelector('.shop__wrapper');

    sliderContainer.addEventListener('mouseover', function () {
        slider1.pause();
    });
    sliderContainer.addEventListener('mouseout', function () {
        slider1.play();
    });

    // вторая карусель
    const slider2 = tns({
        container: '.shop__wrapper-carousel',
        items: 4,
        slideBy: 'page',
        autoplay: true,
        gutter: 22,
        slideBy: 1,
        controlsContainer: '#custom-control',
        autoplayButtonOutput: false,
        navAsThumbnails: true,
        responsive: {
            0: {
                items: 1,
                controls: false,
            },
            540: {
                items: 2,
            },
            840: {
                items: 3,
                controls: true,
            },
            1201: {
                items: 4,
            }
        }
    });

    // остановка карусели при наведении мыши
    const slider2Container = document.querySelector('.shop__wrapper-carousel');

    slider2Container.addEventListener('mouseover', function () {
        slider2.pause();
    });
    slider2Container.addEventListener('mouseout', function () {
        slider2.play();
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
})

