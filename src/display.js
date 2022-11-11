
import { RANDOM_WORD_FOR_PLAY } from './index.js'
import {
  autoSelectEmptySlot,
  removeAllColorClass,
  verifyTheWordAndAct
} from './basicFunctions.js'

function showLetterClicked(keyClicked) {
  let isAnySlotSelected = document.querySelector('.selected')

  if (isAnySlotSelected) {
    isAnySlotSelected.innerHTML = keyClicked
  }

  autoSelectEmptySlot()
}

function addColorClass(slotsDivElements) {
  let wordFormedInSlots = ''
  
  for (let i = 0; i < slotsDivElements.length; i++) {
    let hasRandomWordTheLetterOfTheSlot = RANDOM_WORD_FOR_PLAY.includes(slotsDivElements[i].textContent)
    
    if (!hasRandomWordTheLetterOfTheSlot) {
      removeAllColorClass(slotsDivElements[i])
      slotsDivElements[i].classList.add('grey')
    }

    if (hasRandomWordTheLetterOfTheSlot) {
      removeAllColorClass(slotsDivElements[i])
      slotsDivElements[i].classList.add('yellow')
    }

    if (slotsDivElements[i].textContent === RANDOM_WORD_FOR_PLAY.charAt(i)) {
      removeAllColorClass(slotsDivElements[i])
      slotsDivElements[i].classList.add('green')
    }

    wordFormedInSlots += slotsDivElements[i].textContent
  }
  verifyTheWordAndAct(wordFormedInSlots)
}

export {
  showLetterClicked,
  addColorClass
}