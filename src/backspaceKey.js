import {
  autoSelectEmptySlot,
  returnFirstSlot,
  returnLastSlot,
  returnActualSlotSelected
} from './basicFunctions.js'

function clearPreviousSlot(slotSelected) {
  let previousSibling = slotSelected.previousSibling
  let isNotEmptyThePreviousSibling = previousSibling.textContent !== ''

  if (isNotEmptyThePreviousSibling) {
    previousSibling.textContent = ''
    previousSibling.classList.add('selected')
    slotSelected.classList.remove('selected')
  } else {
    autoSelectEmptySlot()
  }
}

function clearSelectedSlot(slotSelected) {
  let firstSlot = returnFirstSlot()
  let hasContent = slotSelected.textContent !== ''
  let hasNoContentAndIsNotFirstSlot = !hasContent && slotSelected !== firstSlot

  if (hasContent) {
    slotSelected.textContent = ''
  }

  if (hasNoContentAndIsNotFirstSlot) {
    clearPreviousSlot(slotSelected)
  }
}

function backspaceKeyClicked() {
  let slotSelected = returnActualSlotSelected()
  let isAnySlotSelected = slotSelected !== null

  if (isAnySlotSelected) {
    clearSelectedSlot(slotSelected)
  }

  if (!isAnySlotSelected) {
    let lastSlot = returnLastSlot()
    lastSlot.classList.add('selected')
    backspaceKeyClicked()
  }
}

export { backspaceKeyClicked }
