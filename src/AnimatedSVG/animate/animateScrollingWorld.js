import { gsap } from 'gsap'
const duration = 1

const first = (div, callback) => {
    gsap.to(div, {
        onComplete: callback,
        duration: 10 * duration,
        rotation: 0,
        x: -800,
    })
}

export const animateScrollingWorld = (animation, div, callback) => {
    
    switch (animation) {    

        case `first`:
            return first(div, callback)
              
        default: {
            return null
        }

    }
}