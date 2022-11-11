
import { addColorClass } from './display.js'
import {
  checkIfAnySlotIsEmpty,
  returnAllSlots,
  composeWordFromSlotsContent,
  checkIfWordExistsAtDictionary
} from './basicFunctions.js'

function enterKeyClicked() {
  let slotsDivElements = returnAllSlots()
  let isAnySlotEmpty = checkIfAnySlotIsEmpty(slotsDivElements)

  if (isAnySlotEmpty) {
    alert('No hay suficientes letras')
  }

  if (!isAnySlotEmpty) {
    let wordAtDisplay = composeWordFromSlotsContent()
    checkIfWordExistsAtDictionary(wordAtDisplay) ? addColorClass(slotsDivElements) : alert('La palabra no está en la lista')
  }
}

export { enterKeyClicked }