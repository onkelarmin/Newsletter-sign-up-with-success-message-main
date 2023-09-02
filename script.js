const form = document.querySelector('.newsletter__form')
const input = document.getElementById('email')
const invalidLabel = document.querySelector('.invalid-label')

const newsletter = document.querySelector('.newsletter')
const success = document.querySelector('.success')
const successEmail = document.querySelector('.success__email')
const dismissButton = document.getElementById('dismiss')

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value.match(EMAIL_REGEX)) {
    const email = input.value
    input.value = ''
    successEmail.innerText = email
    newsletter.classList.toggle('hidden')
    success.classList.toggle('hidden')
  } else {
    input.classList.add('invalid')
    invalidLabel.classList.remove('hidden')
  }
})

input.addEventListener('input', () => {
  if (!input.classList.contains('invalid')) return

  input.classList.remove('invalid')
  invalidLabel.classList.add('hidden')
})

dismissButton.addEventListener('click', () => {
  newsletter.classList.toggle('hidden')
  success.classList.toggle('hidden')
})

function init() {
  newsletter.classList.remove('hidden')
  success.classList.add('hidden')
  invalidLabel.classList.add('hidden')
  input.value = ''
}

init()
