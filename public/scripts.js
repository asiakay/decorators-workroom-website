$(document).ready(function() {
    $('body').addClass('js');
    var $menu = $('#menu'),
      $menulink = $('.menu-link');
    
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });});


  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('contact-form-modal');
    const quoteButton = document.getElementById('quoteButton');
    const closeButton = document.querySelector('.close-button');

    quoteButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});




/* document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            displaySuccessMessage();
            form.reset();
        }
    });

    function validateForm() {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (!name || !email || !phone || !message) {
            alert('Please fill in all fields');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return


        return re.test(String(email).toLowerCase());
    }

    function displaySuccessMessage() {
        const formContainer = document.querySelector('form');
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Thank you for your message. We will get back to you soon!';
        successMessage.style.color = 'green';
        formContainer.appendChild(successMessage);
    }
});
 */