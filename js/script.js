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

ticketButton.onclick = () => {
    window.alert('We detected that you are on the Safari browser. Sadly our payment system does not work here :( Please try to use another browser.')
}