let form = document.querySelector('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  let output = document.querySelector('output')
  let firstNum = document.querySelector('#first-num').value
  let secondNum = document.querySelector('#second-num').value
  let operator = document.querySelector('#operator').value
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`)
})

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'))

// Start your code here
// You may move this JS to another file if you wish
const listeners = [
  // Console Log
  () => {
    console.log('Console Log Demo')
  },
  // Console Error
  () => {
    console.error('Console Error Demo')
  },
  // Console Count
  () => {
    console.count('Count Button')
  },
  // Console Warn
  () => {
    console.warn('Console Warn Button')
  },
  // Console Assert
  () => {
    const number = 2
    console.assert(number === 3, {
      number,
      errorMsg: 'The number does not equal 3'
    })
  },
  // Console Clear
  () => {
    console.clear()
  },
  // Console Dir
  function () {
    console.dir(this)
  },
  // Console dirxml
  function () {
    console.dirxml(this)
  },
  // Console Group Start
  () => {
    console.group()
  },
  // Console Group End
  () => {
    console.groupEnd()
  },
  // Console Table
  () => {
    console.table([
      { name: 'Software Engineering', num: 110 },
      { name: 'Programming Languages: Principles and Paradigms', num: 130 },
      { name: 'Advanced Software Engineering', num: 112 }
    ])
  },
  // Start Timer
  () => {
    console.time('Timer Button')
  },
  // End Timer
  () => {
    console.timeEnd('Timer Button')
  },
  // Console Trace
  function handleBtnClick () {
    function deep () {
      function deeper () {
        function deepest () {
          console.trace()
        }
        deepest()
      }
      deeper()
    }
    deep()
  },
  // Trigger a Global Error
  () => {
    boom()
  },
  // Load something
  async function () {
    this.disabled = true
    try {
      const response = await fetch(
        'https://cse110-sp23-group20.github.io/fortune-teller/source/home-page/Images/Background.png'
      )
      this.textContent = (await response.blob()).size
    } catch (error) {
      if (error instanceof TypeError) {
        this.textContent = 'Network error'
      } else {
        throw error
      }
    } finally {
      this.disabled = false
    }
  }
]

for (const [i, btn] of errorBtns.entries()) {
  btn.addEventListener('click', listeners[i])
}
