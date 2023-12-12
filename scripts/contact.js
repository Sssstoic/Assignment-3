// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

submitButton.addEventListener('click', function () {
    contactPage.innerHTML = '<p class="thank-you-message">Thank you for your message</p>';

    const thankYouMessage = document.querySelector('.thank-you-message');
    
    if (thankYouMessage) {
        thankYouMessage.style.fontSize = '24px';
    }
});