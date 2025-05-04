const form = document.getElementById('contactForm')
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')
const responseMessage = document.getElementById('responseMessage')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  //=============Get Input Values==============//
  const firstName = firstNameInput.value.trim()
  const lastName = lastNameInput.value.trim()
  const email = emailInput.value.trim()
  const message = messageInput.value.trim()

  //============Check for Empty fields===========//
  if (!firstName || !lastName || !email || !message) {
    responseMessage.style.color = 'red'
    responseMessage.textContent = 'Please fill in all * fields.'
    return
  }

  //============Success Message===========//
  responseMessage.style.color = 'palevioletred'
  responseMessage.textContent = `Thank you, ${firstName}! Your message has been sent`

  //============Success Message===========//
  form.reset()
})
