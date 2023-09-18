let animationElement = document.querySelectorAll('.show-on-scroll');


console.log(animationElement);

let toogleAnimationElementInWindow = (element) => {
    let rect = element.getClientRects()[0]
    let heightScreen = window.innerHeight

    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add('start')
    } else {
        element.classList.remove('start')
    }
}


let checkAnimation = () => {
    animationElement.forEach(element => {
        toogleAnimationElementInWindow(element);
    });
}


window.onscroll = checkAnimation;