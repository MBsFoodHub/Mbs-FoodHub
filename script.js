function openLightbox(imageSrc) {
  document.getElementById("lightbox-image").src = imageSrc; // Set the image source
  document.getElementById("lightbox").style.display = "flex"; // Show the lightbox
}

// Close lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}










// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    toggleBackToTopBtn();
};

function toggleBackToTopBtn() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Smooth scroll back to the top when button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


  /* Show the button when scrolling down */
window.onscroll = function() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block"; /* Show button */
  } else {
      backToTopBtn.style.display = "none"; /* Hide button */
  }
};











function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
}















let slideIndex = 1;
let slideInterval; // Declare the interval variable
showSlides(slideIndex);

// Function to start the automatic slideshow
function startSlideshow() {
    slideInterval = setInterval(() => {
        showSlides(slideIndex += 1); // Move to the next slide
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)
}

// Start the slideshow
startSlideshow();

// Next/previous controls
function plusSlides(n) {
    clearInterval(slideInterval); // Clear the existing interval
    showSlides(slideIndex += n); // Show the next or previous slide
    startSlideshow(); // Restart the slideshow timer
}

// Show the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlider");
    
    // Check if there are any slides
    if (slides.length === 0) {
        console.error("No slides found with the class 'mySlider'.");
        return; // Exit the function if no slides are found
    }

    // Wrap around the slide index
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  
}






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

    // Check if the required fields are filled
    if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return; // Exit the function if validation fails
    }

    // If contact type is feedback, check if rating is selected
    if (contactType === "feedback" && !rating) {
        alert("Please select a rating before submitting your feedback.");
        return; // Exit the function if rating is not selected
    }

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













function toggleLogo() {
  const logoImage = document.getElementById("logo-image");
  const logoText = document.getElementById("logo-text");

  if (logoImage.style.display === "none") {
      logoImage.style.display = "block"; // Show logo
      logoText.style.display = "none"; // Hide text
  } else {
      logoImage.style.display = "none"; // Hide logo
      logoText.style.display = "block"; // Show text
  }
}




















// Function to filter menu items based on category
function filterMenu() {
    const category = document.getElementById("category").value;
    const lutongBahayCategory = document.querySelector('.lutong-bahay-category');
    const bundleCategory = document.querySelector('.bundle-category');
    const paresMealsCategory = document.querySelector('.pares-meals-category');
    const foodCategory = document.querySelector('.food-category');
    const beverageCategory = document.querySelector('.beverage-category');
    const silogMealsCategory = document.querySelector('.silog-meals-category');
    const dessertsCategory = document.querySelector('.desserts-category');
    const snacksCategory = document.querySelector('.snacks-category');
    const pastaCategory = document.querySelector('.pasta-category');

    switch (category) {
        case "all":
            lutongBahayCategory.style.display = "block";
            bundleCategory.style.display = "block";
            paresMealsCategory.style.display = "block";
            foodCategory.style.display = "block";
            beverageCategory.style.display = "block";
            silogMealsCategory.style.display = "block";
            dessertsCategory.style.display = "block";
            snacksCategory.style.display = "block";
            pastaCategory.style.display = "block";
            break;
        case "lutong-bahay":
            lutongBahayCategory.style.display = "block";
            bundleCategory.style.display = "none";
            paresMealsCategory.style.display = "none";
            foodCategory.style.display = "none";
            beverageCategory.style.display = "none";
            silogMealsCategory.style.display = "none";
            dessertsCategory.style.display = "none";
            snacksCategory.style.display = "none";
            pastaCategory.style.display = "none";
            break;
        case "bundle":
            lutongBahayCategory.style.display = "none";
            bundleCategory.style.display = "block";
            paresMealsCategory.style.display = "none";
            foodCategory.style.display = "none";
            beverageCategory.style.display = "none";
            silogMealsCategory.style.display = "none";
            dessertsCategory.style.display = "none";
            snacksCategory.style.display = "none";
            pastaCategory.style.display = "none";
            break;
        case "pares-meals":
            lutongBahayCategory.style.display = "none";
            bundleCategory.style.display = "none";
            paresMealsCategory.style.display = "block";
            foodCategory.style.display = "none";
            beverageCategory.style.display = "none";
            silogMealsCategory.style.display = "none";
            dessertsCategory.style.display = "none";
            snacksCategory.style.display = "none";
            pastaCategory.style.display = "none";
            break;
        case "food":
            lutongBahayCategory.style.display = "none";
            bundleCategory.style.display = "none";
            paresMealsCategory.style.display = "none";
            foodCategory.style.display = "block";
            beverageCategory.style.display = "none";
            silogMealsCategory.style.display = "none";
            dessertsCategory.style.display = "none";
            snacksCategory.style.display = "none";
            pastaCategory.style.display = "none";
            break;
        case "beverages":
            lutongBahayCategory.style.display = "none";
            bundleCategory.style.display = "none";
            paresMealsCategory.style.display = "none";
            foodCategory.style.display = "none";
            beverageCategory.style.display = "block";
            silogMealsCategory.style.display = "none";
            dessertsCategory.style.display = "none";
            snacksCategory.style.display = "none";
            pastaCategory.style.display = "none";
            break;
        case "silog-meals":
            lutongBahayCategory.style.display = "none";
            bundleCategory.style.display = "none";
            paresMealsCategory.style.display = "none";
            foodCategory.style.display = "none";
            beverageCategory.style.display = "none";
            silogMealsCategory.style.display = "block";
            dessertsCategory.style.display = "none";
            snacksCategory.style.display = "none";
            pastaCategory.style.display = "none";
            break;
        case "desserts":
            lutongBahayCategory.style.display = "none";
            bundleCategory.style.display = "none";
            paresMealsCategory.style.display = "none";
            foodCategory.style.display = "none";
            beverageCategory.style.display = "none";
            silogMealsCategory.style.display = "none";
            dessertsCategory.style.display = "block";
            snacksCategory.style.display = "none";
            pastaCategory.style.display = "none";
            break;
        case "snacks":
            lutongBahayCategory.style.display = "none";
            bundleCategory.style.display = "none";
            paresMealsCategory.style.display = "none";
            foodCategory.style.display = "none";
            beverageCategory.style.display = "none";
            silogMealsCategory.style.display = "none";
            dessertsCategory.style.display = "none";
            snacksCategory.style.display = "block";
            pastaCategory.style.display = "none";
            break;
        case "pasta":
            lutongBahayCategory.style.display = "none";
            bundleCategory.style.display = "none";
            paresMealsCategory.style.display = "none";
            foodCategory.style.display = "none";
            beverageCategory.style.display = "none";
            silogMealsCategory.style.display = "none";
            dessertsCategory.style.display = "none";
            snacksCategory.style.display = "none";
            pastaCategory.style.display = "block";
            break;
    }
}

// Function to filter menu items based on price
function filterPrice() {
    const priceRange = document.getElementById("price").value;
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const price = parseInt(item.getAttribute('data-price'));
        if (priceRange === "all") {
            item.style.display = "block";
        } else if (priceRange === "low") {
            item.style.display = price < 100 ? "block" : "none";
        } else if (priceRange === "medium") {
            item.style.display = price >= 100 && price <= 350 ? "block" : "none";
        } else if (priceRange === "high") {
            item.style.display = price > 350 ? "block" : "none";
        }
    });
}

// Event listeners for filters
document.getElementById("category").addEventListener("change", filterMenu);
document.getElementById("price").addEventListener("change", filterByPrice);







const header = document.querySelector('header');
const scrollPosition = 0;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition > scrollPosition) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  scrollPosition = currentScrollPosition;
});


let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

// Function to show the current testimonial
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        if (i === index) {
            testimonial.classList.add("active");
        }
    });
}

// Function to show the next testimonial
function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Function to show the previous testimonial
function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize the first testimonial
showTestimonial(currentTestimonial);




