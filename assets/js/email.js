/ Global variables that store DOM elements related to form
let formName = document.getElementById('fromName');
let formEmail = document.getElementById('email');
let messsage = document.getElementById('message');
var errorMsgName = document.getElementById('name-error');
var errorMsgEmail = document.getElementById('email-error');
var errorMsgMsg = document.getElementById('msg-error');

// Credit for function structure: W3 Schools 
function validateForm() {
    // Variables to store the value of form inputs
    const name = document.querySelector('#fromName').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#message').value;
    // If loop to test if form inputs are empty
    // Generates content to warn user of incorrect form inputs
    if (name === "") {
        errorMsgName.innerHTML = `Please enter your full name`;
        errorMsgName.style.color = '#FF0000';
    } else if (email === "") {
        errorMsgEmail.innerHTML = `Please enter your full email address`;
        errorMsgEmail.style.color = '#FF0000';
    } else if (msg === "") {
        errorMsgMsg.innerHTML = `Please enter a message`;
        errorMsgMsg.style.color = '#FF0000';
    } else {
        // Calls to sendEmail function that uses Email JS to sent client email to site owner
        sendEmail();
    }
    return false;
}

// Credit: Code Institue and Email JS
function sendEmail() {
    // Removes error messages from successfully submitted form
    errorMsgName.remove();
    errorMsgEmail.remove();
    errorMsgMsg.remove();
    // Calls Email JS and sends email
    emailjs.init('user_cQ4AB0KpJse0GG5cv2LdL');
    emailjs.send('service_byj7hbh', 'template_Quiz', {
       'from_name': formName.value,
       'from_email': formEmail.value,
       'message': messsage.value
    }).then(
        function (response) {
            // Success message
           alert('Your message has been sent!');
       },
        function (error) {
            // Error message
           alert('Whoops, your message has not been sent. Are all the fields filled in correctly?');
       },
    );
    return false;  
}