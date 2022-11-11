import { autoSelectEmptySlot } from './basicFunctions.js'

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

function returnFirstSlot() {
  return document.querySelector('#words .word:last-child .slot:first-child')
}

function clearSelectedSlot(slotSelected) {
  let firstSlot = returnFirstSlot()
  let secondSlot = document.querySelector('#words .word:last-child .slot:nth-child(2)')
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
  let slotSelected = document.querySelector('.selected')

  let isAnySlotSelectedDifferentOfFirst = slotSelected !== null && slotSelected !== firstSlot
  let isNoSelectedSlot = slotSelected === null

  if (isAnySlotSelectedDifferentOfFirst) {
    clearSelectedSlot(slotSelected)
  }

  if (isNoSelectedSlot) {
    let lastSlot = document.querySelector('#words .word:last-child .slot:last-child')
    lastSlot.classList.add('selected')
    backspaceKeyClicked()
  }
}

export { backspaceKeyClicked }
