'use strict'

import { readMore, init } from './readmore.js'

document.addEventListener("DOMContentLoaded", () => {

    let elements = document.getElementsByTagName("p")
    init(elements)


    // const container = document.getElementById("lipsum")
    // console.log("container", container)
    // let counter = 0
    // for(let child of container.children) {
    //     // save the original text - when starting the page ONLY
    //     readMore(child, counter, true)
    //     counter++
        
    // }

    // let index = 0
    // for(let element of elements) {
    //     readMore(element, index, true)
    //     index++
    // }
    
})

