
import { RANDOM_WORD_FOR_PLAY } from './index.js'
import {
  autoSelectEmptySlot,
  removeAllColorClass,verifyTheWordAtDisplay,
  returnActualSlotSelected
} from './basicFunctions.js'

function showLetterClicked(keyClicked) {
  let actualSelectedSlot = returnActualSlotSelected()
  let isAnySlotSelected = actualSelectedSlot !== null

  if (isAnySlotSelected) {
    actualSelectedSlot.innerHTML = keyClicked
  }

  autoSelectEmptySlot()
}

function addClass(color, slotDivToAddColor) {
  removeAllColorClass(slotDivToAddColor)
  slotDivToAddColor.classList.add(color)
}

function addColorClass(slotsDivElements) {
  let wordAtDisplay = ''

  for (let i = 0; i < slotsDivElements.length; i++) {
    let isTheSlotLetterInTheWord = RANDOM_WORD_FOR_PLAY.includes(slotsDivElements[i].textContent)
    let isActualPositionAndLetterMatch = slotsDivElements[i].textContent === RANDOM_WORD_FOR_PLAY.charAt(i)
    let actualDivToAddColor = slotsDivElements[i]

    if (!isTheSlotLetterInTheWord) {
      addClass('grey', actualDivToAddColor)
    }

    if (isTheSlotLetterInTheWord) {
      addClass('yellow', actualDivToAddColor)
    }

    if (isActualPositionAndLetterMatch) {
      addClass('green', actualDivToAddColor)
    }

    wordAtDisplay += actualDivToAddColor.textContent
  }
  verifyTheWordAtDisplay(wordAtDisplay)
}

export {
  showLetterClicked,
  addColorClass
}