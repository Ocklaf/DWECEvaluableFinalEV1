import { showLetterClicked } from './display.js'
import { backspaceKeyClicked } from './backspaceKey.js'
import { enterKeyClicked } from './enterKey.js'

let fullKeyboard = Array.from(document.getElementsByClassName('key'))
const enterKey = document.getElementById('enter')
const backspaceKey = document.getElementById('backspace')
const svg = document.querySelector('svg')
const path = document.querySelector('path')

function keyClicked(e) {
  let letterClickedValue = e.target.dataset.key
  let isBackspaceKey = e.target === backspaceKey || e.target === path || e.target === svg
  let isEnterKey = e.target === enterKey

  if (isBackspaceKey) {
    backspaceKeyClicked()
    return
  }

  if (isEnterKey) {
    enterKeyClicked()
    return
  }

  showLetterClicked(letterClickedValue)
}

function installKeyboardHandlers() {
  fullKeyboard = [...fullKeyboard, enterKey, backspaceKey]
  fullKeyboard.forEach(e => e.addEventListener('click', keyClicked))
}

export { installKeyboardHandlers }
