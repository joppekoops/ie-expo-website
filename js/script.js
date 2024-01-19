let removeEB = () => {
    let EBButton = document.getElementById('eventbrite-widget-modal-trigger-779522993257')
    EBButton.id = 'not-working-button';
}


let isPopupBlocked = () => {
    let testWindow = window.open(null, "testWindow", "width=200,height=100")

    try {
        testWindow.close()
        return false
    }

    catch (error) {
        return true
    }
}


if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

    console.log("This is Safari")

    if (isPopupBlocked) {
        console.log("Popup blocked")
        removeEB()
    }
}

else {
    console.log("This is not Safari")
}

let ticketButton = document.getElementById('not-working-button')

if(ticketButton) {
    ticketButton.onclick = () => {
        window.alert('We detected that you are on the Safari browser. Sadly our payment system does not work here :( Please try to use another browser.')
    }
}

// const slider = document.querySelector('.slider')
// const slides = document.querySelectorAll('article.project')
// const prevButton = document.querySelector('.projects-prev-button')
// const nextButton = document.querySelector('.projects-next-button')
// let currentSlide = 0

// for (let i = 0; i < slides.length; i++) {
//     slides[i].style.transform = 'translateX(calc(' + i * 88 + 'vw + ' + i * 1.5 + 'rem))'
// }

// let goToSlide = (nextSlide) => {

//     slider.style.transform = 'translateX(calc(' + nextSlide * -88 + 'vw + ' + nextSlide * -1.5 + 'rem))'

//     let nextTitle
//     let prevTitle

//     if (nextSlide == 0) {
//         prevButton.style.display = 'none';
//         nextButton.style.display = 'flex';

//         nextTitle = slides[nextSlide].nextElementSibling.querySelector('h3').innerText
//     }

//     else if (nextSlide == slides.length - 1) {
//         prevButton.style.display = 'flex';
//         nextButton.style.display = 'none';

//         prevTitle = slides[nextSlide].previousElementSibling.querySelector('h3').innerText
//     }

//     else {
//         prevButton.style.display = 'flex';
//         nextButton.style.display = 'flex';

//         prevTitle = slides[nextSlide].previousElementSibling.querySelector('h3').innerText
//         nextTitle = slides[nextSlide].nextElementSibling.querySelector('h3').innerText
//     }

//     prevButton.firstElementChild.innerText = prevTitle
//     nextButton.firstElementChild.innerText = nextTitle

//     currentSlide = nextSlide
// }

// prevButton.onclick = () => {
//     goToSlide(currentSlide-1)
// }
// nextButton.onclick = () => {
//     goToSlide(currentSlide+1)
// }

// goToSlide(0)

