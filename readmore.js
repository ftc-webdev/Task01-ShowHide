'use strict'

let originals = []   // store the original text

let truncate = (text, length) => {
    let str = text.substr(0, length = 100)
    return str
}

let readLess = (paragraph, id) => {

    let originalText = originals[id]
    paragraph.innerText = originalText

    let lessButton = `
        <div class="button" id="${id}">...Show Less</div>
    `
    paragraph.innerHTML += lessButton

    let lessButtonElement = document.getElementById(id)
    lessButtonElement.addEventListener("click", lessButtonClickHandler)

}

let readMore = (paragraph, counter, saveOriginalText = false) => {
    
    if(saveOriginalText) originals[counter] = paragraph.innerText
    
    // truncate the text in the DOM
    paragraph.innerText = truncate(paragraph.innerText)
    // console.log("paragraph", paragraph)

    let button = `
        <div class="button" id="${counter}">...Read More</div>
    `
    paragraph.innerHTML += button
    
    let buttonElement = document.getElementById(counter)
    // console.log("button", buttonElement)
    buttonElement.addEventListener("click", moreButtonClickHandler)

}


let lessButtonClickHandler = (ev) => {
    let button = ev.target
    let id = button.id
    let paragraph = button.parentElement

    readMore(paragraph, id)

}

let moreButtonClickHandler = (ev) => {
    
    let button = ev.target
    let id = button.id
    let paragraph = button.parentElement

    readLess(paragraph, id)

}


let init = (elements) => {
    let index = 0
    for(let element of elements) {
        readMore(element, index++, true)
    }
}

export {
    readMore,
    init    
}
