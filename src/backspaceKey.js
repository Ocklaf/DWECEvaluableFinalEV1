import {
  autoSelectEmptySlot,
  returnFirstSlot,
  returnSecondSlot,
  returnLastSlot,
  returnActualSlotSelected
} from './basicFunctions.js'

function clearPreviousSlot(slotSelected) {
  let isNotEmptyThePreviousSibling = slotSelected.previousSibling.textContent !== ''
  let previousSibling = slotSelected.previousSibling

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
  let secondSlot = returnSecondSlot()
  let hasContent = slotSelected.textContent !== ''
  let hasContentAndIsNotTheFirstLetter = hasContent && slotSelected !== firstSlot
  let hasNotContentAndCantSelectFirstLetter = !hasContent && slotSelected !== secondSlot

  if (hasContentAndIsNotTheFirstLetter) {
    slotSelected.textContent = ''
  }

  if (hasNotContentAndCantSelectFirstLetter) {
    clearPreviousSlot(slotSelected)
  }
}

function backspaceKeyClicked() {
  let firstSlot = returnFirstSlot()
  let slotSelected = returnActualSlotSelected()
  let isAnySlotSelectedDifferentOfFirst = slotSelected !== null && slotSelected !== firstSlot
  let isNoSelectedSlot = slotSelected === null

  if (isAnySlotSelectedDifferentOfFirst) {
    clearSelectedSlot(slotSelected)
  }

  if (isNoSelectedSlot) {
    let lastSlot = returnLastSlot()
    lastSlot.classList.add('selected')
    backspaceKeyClicked()
  }
}

export { backspaceKeyClicked }
