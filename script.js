const form = document.getElementById('contactForm')
const ul = document.getElementById('ul')
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

  //============Display All Form Data===========//
  function handleFormData() {
    const li = document.createElement('li')
  }
  responseMessage.style.color = 'palevioletred'
  responseMessage.style.fontSize = 'large'
  responseMessage.innerHTML = `
   <p  style= "color: palevioletred;">Thank you,${firstName}!</p>
   <p  style= "color: palevioletred;">Your message has been sent with the following details:</p>
   <ul>
     <li><strong>First Name:</strong> ${firstName}</li>
     <li><strong>Last Name:</strong> ${lastName}</li>
     <li><strong>Email:</strong> ${email}</li>
     <li><strong>Message:</strong> ${message}</li>
   </ul> `

  //===========reset form============//
  form.reset()
})
