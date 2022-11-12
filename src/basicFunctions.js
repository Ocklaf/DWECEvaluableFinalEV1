
import words from './dictionary.js'
import { createDivWordContainer } from './domElementsCreation.js'
import { RANDOM_WORD_FOR_PLAY } from './index.js'

const selectRandomWord = () => words[Math.floor(Math.random() * (words.length - 1))].toUpperCase()

const returnActualSlotSelected = () => document.querySelector('#words .word:last-child .slot.selected')

const returnFirstSlot = () => document.querySelector('#words .word:last-child .slot:first-child')

const returnLastSlot = () => document.querySelector('#words .word:last-child .slot:last-child')

const returnAllSlots = () => document.querySelectorAll('#words .word:last-child .slot')

const checkIfWordExistsAtDictionary = wordAtDisplay => words.includes(wordAtDisplay.toLowerCase())

const removeTheClassAttribute = (elements, className) => elements.forEach(e => e.classList.remove(className))

const verifyTheWordAtDisplay = wordAtDisplay => wordAtDisplay === RANDOM_WORD_FOR_PLAY ? alert('Has ganado') : createDivWordContainer()

function removeAllColorClass(slotDiv) {
  let colorClassesToRemove = ['yellow', 'green', 'grey']

  slotDiv.classList.remove(...colorClassesToRemove)
}

function toggleClassSelected(e) {
  let actualSelectedSlot = returnActualSlotSelected()
  let isOneWithSelectedClass = actualSelectedSlot !== null
  let clickedSlotDiv = e.target

  if (isOneWithSelectedClass) {
    actualSelectedSlot.classList.remove('selected')
  }

  clickedSlotDiv.classList.toggle('selected')
}

function checkIfAnySlotIsEmpty(slotsDiv) {
  for (let slot of slotsDiv) {
    let isAnySlotEmpty = slot.textContent === ''
    if (isAnySlotEmpty) {
      return slot
    }
  }
  return false
}

function autoSelectEmptySlot() {
  let slotsDiv = returnAllSlots()
  let isReturnedAEmptySlot = checkIfAnySlotIsEmpty(slotsDiv)

  isReturnedAEmptySlot ? isReturnedAEmptySlot.click() : removeTheClassAttribute(slotsDiv, 'selected')
}

function composeWordFromSlotsContent() {
  let slotsDiv = returnAllSlots()
  let word = ''

  for (let letter of slotsDiv) {
    word += letter.textContent
  }
  return word
}

export {
  selectRandomWord,
  toggleClassSelected,
  autoSelectEmptySlot,
  checkIfAnySlotIsEmpty,
  returnActualSlotSelected,
  returnFirstSlot,
  returnLastSlot,
  returnAllSlots,
  composeWordFromSlotsContent,
  checkIfWordExistsAtDictionary,
  removeAllColorClass,
  verifyTheWordAtDisplay
}
