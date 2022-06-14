function clearName() {
  if (document.getElementById('nameField').value == 'First and Last Name') {
    document.getElementById('nameField').value = ''
  }
}
//Clears default text insied the number box and leaves user imput
function clearMessage() {
  if (document.getElementById('messageField').value == 'Message Here!') {
    document.getElementById('messageField').value = ''
  }
}
//Bring default text back for name field
function resetName() {
  if (document.getElementById('nameField').value == '') {
    document.getElementById('nameField').value = 'First and Last Name'
  }
}
//Bring default text back for number field
function resetMessage() {
  if (document.getElementById('messageField').value == '') {
    document.getElementById('messageField').value = 'Message Here!'
  }
}
//Clears default text insied the email box and leaves user imput
function clearEmail() {
  if (document.getElementById('emailField').value == 'example: awesome@gmail.com') {
    document.getElementById('emailField').value = ''
  }
}
//Bring default text back for email field
function resetEmail() {
  if (document.getElementById('emailField').value == '') {
    document.getElementById('emailField').value = 'example: awesome@gmail.com'
  }
}
