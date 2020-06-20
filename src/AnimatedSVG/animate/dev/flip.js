import { gsap } from "gsap"

let duration = 1;

const flip360 = (div, callback) => {
     gsap.to(div, {
        duration: 1 * duration,
        rotationY: -360,
        onComplete: callback,
    });
}


const flipOut = (div, callback) => {
     gsap.to(div, {
        duration: 0.75 * duration,
        rotationY: -180,
        opacity: 0,
        onComplete: callback,
    });
}

export const flip = (animation, div, callback) => {
    switch (animation) {
        
        case `flipOut`:
            return flipOut(div, callback)

        case `flip360`:
            return flip360(div, callback)

        default: {
            return null
        }
    }
}
