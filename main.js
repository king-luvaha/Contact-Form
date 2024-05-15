// Get all needed elements from the DOM
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

// Get needed data from email JS
const publicKey = "vCCEJ0PlBUuw8pOVb";
const serviceID = "service_6appx6b";
const templateID = "template_qphq17e";

// Initialize emailJS with public key
emailjs.init(publicKey);

// Add submit event to the form
contactForm.addEventListener("submit", async e => {
    // Prevent form default behaviour
    e.preventDefault();

    // Form validation logic here (example)
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Please fill in all fields.");
        return;
    }

    // Change button text and disable it
    submitBtn.innerText = "Just A Moment...";
    submitBtn.disabled = true;

    // Get all input field values
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };
    
    try {
        await emailjs.send(serviceID, templateID, inputFields);
        submitBtn.innerText = "Message Sent Successfully";
        // Clear out all input fields
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    } catch (error) {
        console.error("Failed to send message: ", error);
        submitBtn.innerText = "Something went wrong";
    } finally {
        // Re-enable the button after processing
        submitBtn.disabled = false;
    }
});