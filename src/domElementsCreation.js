
import { returnAllSlots, toggleClassSelected } from './basicFunctions.js'
import { WORDS_DIV_CONTAINER } from './index.js'

function removeTheClickEventPreviousDivSlots() {
  let previousDivSlots = returnAllSlots()
  for (let slot of previousDivSlots) {
    slot.removeEventListener('click', toggleClassSelected)
  }
}

function createDivWordContainer() {
  let divClassWordContainer = document.createElement('div')
  let htmlFragmentToInyect = document.createDocumentFragment()

  divClassWordContainer.classList.add('word')

  for (let i = 0; i < 5; i++) {
    let slotDivElement = document.createElement('div')
    let isFirstSlotDiv = i === 0

    if (isFirstSlotDiv) {
      slotDivElement.classList.add('selected')
    }

    slotDivElement.classList.add('slot')
    slotDivElement.addEventListener('click', toggleClassSelected)
    htmlFragmentToInyect.appendChild(slotDivElement)
  }

  removeTheClickEventPreviousDivSlots()
  divClassWordContainer.appendChild(htmlFragmentToInyect)
  WORDS_DIV_CONTAINER.appendChild(divClassWordContainer)
}

export { createDivWordContainer }