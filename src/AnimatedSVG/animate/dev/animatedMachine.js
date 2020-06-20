
import { gsap } from "gsap"

const duration = 1

const home = (div, callback) => {
    gsap.to(div, {
        onComplete: callback,
        duration: 1 * duration,
        opacity: 1,
        scale: 0.7,
        rotation: 0,
        x: 0,
    })
}

const work = (div, callback) => {
    gsap.to(div, {
        onComplete: callback,
        duration: 1 * duration,
        opacity: 1,
        scale: 0.4,
        rotation: -20,
        x: 50,
    })
}

const life = (div, callback) => {
    gsap.to(div, {
        onComplete: callback,
        duration: 1 * duration,
        opacity: 1,
        rotation: -20,
        scale: 0.4,
        x: -50,
    })
}


const balance = (div, callback) => {
    gsap.to(div, {
        onComplete: callback,
        duration: 1 * duration,
        opacity: 1,
        scale: 0.7,
        rotation: -40,
        x: 0,
    })
}

const privacy = (div, callback) => {

}


const hideTitleCard = (div) => {
    gsap.set(div, {
        opacity: 0,
        rotation: -55,
        scale: 1,
        x: 0,
    })
}

const revealTitle = (div, callback) => {
    gsap.to(div, {
        duration: 0.75 * duration,
        opacity: 1,
        scale: 0.8,
        rotation: 0,
        x: 0,
        y: 0,
        onComplete: callback,
    })
}


const offScreenLeft = (div) => {
    gsap.set(div, {
        x: -560,
        y: 0,
        scale: 0.4,
        rotation: 15,
    })
}


export const animatedMachine = (animation, div, callback) => {
    
    switch (animation) {    

        case `revealTitle`:
            return revealTitle(div, callback)
        
        case `hideTitleCard`:
            return hideTitleCard(div)
        
        case `offScreenLeft`:
            return offScreenLeft(div)

        case `/`:
            return home(div, callback)

        case `/work`:
            return work(div, callback)

        case `/life`:
            return life(div, callback)

        case `/balance`:
            return balance(div, callback)

        case `/privacy`:
            return privacy(div, callback)
            

        default: {
            return null
        }
    }
}
