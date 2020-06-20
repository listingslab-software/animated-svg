import { gsap } from "gsap"

// use a generic animation duration set in redux
const duration = 1;

const fadeOutSpin = (div, callback) => {
     gsap.to(div, {
        duration: 10 * duration,
        opacity: 0,
        scale: 0.9,
        rotation: 90,
        onComplete: callback,
    });
}

const fadeIn = (div, callback) => {
     gsap.to(div, {
        duration: 1 * duration,
        opacity: 1,
        onComplete: callback,
    });
}

const fadeOut = (div, callback) => {
     gsap.to(div, {
        duration: 1 * duration,
        opacity: 0,
        onComplete: callback,
    });
}


export const fade = (animation, div, callback) => {
    switch (animation) {
        
        case `fadeIn`:
            return fadeIn(div, callback)

        case `fadeOut`:
            return fadeOut(div, callback)

        case `fadeOutSpin`:
            return fadeOutSpin(div, callback)

        default: {
            return null
        }
    }
}
