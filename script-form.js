
    // Function to toggle input fields based on selected contact type
    function toggleInputFields() {
        const contactType = document.getElementById("contactType").value;
        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const messageField = document.getElementById("message");
        const submitButton = document.querySelector("button[type='submit']");
        const ratingContainer = document.getElementById("ratingContainer");
    
        if (contactType) {
            nameField.disabled = false;
            emailField.disabled = false;
            messageField.disabled = false;
            submitButton.disabled = false; // Enable the submit button
    
            // Show rating container if feedback is selected
            if (contactType === "feedback") {
                ratingContainer.style.display = "block"; // Show rating input
            } else {
                ratingContainer.style.display = "none"; // Hide rating input
            }
        } else {
            nameField.disabled = true;
            emailField.disabled = true;
            messageField.disabled = true;
            submitButton.disabled = true; // Disable the submit button
            ratingContainer.style.display = "none"; // Hide rating input
        }
    }
    
    // Prevent default form submission and handle it with fetch
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
    
        // Get form data
        const contactType = document.getElementById("contactType").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const rating = document.getElementById("rating").value;
    
        // Log the data (or send it to Formspree using fetch)
        console.log("Contact Type:", contactType);
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        console.log("Rating:", rating);
    
        // Send the data to Formspree using fetch
        fetch("https://formspree.io/f/xnnnzzwk", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contactType: contactType,
            name: name,
            email: email,
            message: message,
            rating: rating
        })
    }).then(response => {
        if (response.ok) {
            alert("Your message has been sent successfully! Thank you for your feedback."); // Custom message
            document.getElementById("contactForm").reset(); // Reset the form
        } else {
            alert("There was a problem sending your message. Please try again.");
        }
    }).catch(error => {
        alert("There was a problem sending your message. Please check your internet connection.");
    });
    });