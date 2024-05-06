const arrowButton = document.querySelector('.header_btn');

function removeAnimationClasses() {
    elementsToAnimate.forEach(element => {
        element.classList.remove('active');
    });
}

arrowButton.addEventListener('click', () => {
    const nextSection = document.querySelector('header').nextElementSibling;
    nextSection.scrollIntoView({ behavior: 'smooth' });

    removeAnimationClasses();
});


const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    elementsToAnimate.forEach(element => {
        const slideInAt = (window.scrollY + window.innerHeight) - element.clientHeight / 2;
        const isHalfShown = slideInAt > element.offsetTop;
        if (isHalfShown) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));
