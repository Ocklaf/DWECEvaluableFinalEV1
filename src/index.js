
import './styles.css'
import { installKeyboardHandlers } from './keyboard.js'
import { createDivWordContainer } from './domElementsCreation.js'
import { selectRandomWord } from './basicFunctions.js'

const WORDS_DIV_CONTAINER = document.getElementById('words')
const RANDOM_WORD_FOR_PLAY = selectRandomWord()

function startApp() {
  createDivWordContainer()
  installKeyboardHandlers()
}

document.addEventListener('DOMContentLoaded', startApp)

export {
  RANDOM_WORD_FOR_PLAY,
  WORDS_DIV_CONTAINER
}
