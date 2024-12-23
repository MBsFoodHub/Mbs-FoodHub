
function openLightbox(imageSrc, title) {
    document.getElementById("lightbox-image").src = imageSrc; // Set the image source
    document.getElementById("lightbox-title").innerText = title; // Set the title
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

function openFullscreenLogo() {
    var fullscreenLogo = document.getElementById("fullscreen-logo");
  
    // Create a full-screen container if it doesn't exist
    if (!fullscreenLogo) {
      fullscreenLogo = document.createElement("div");
      fullscreenLogo.id = "fullscreen-logo";
      fullscreenLogo.style.position = "fixed";
      fullscreenLogo.style.top = "0";
      fullscreenLogo.style.left = "0";
      fullscreenLogo.style.width = "100%";
      fullscreenLogo.style.height = "100%";
      fullscreenLogo.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Dark background
      fullscreenLogo.style.display = "flex";
      fullscreenLogo.style.justifyContent = "center";
      fullscreenLogo.style.alignItems = "center";
      fullscreenLogo.style.zIndex = "1000"; // Ensure it's on top of everything
      fullscreenLogo.onclick = function() { // Close when clicking outside
        fullscreenLogo.style.display = "none";
      };
  
      // Create the circular logo image
      var logoImage = document.createElement("img");
      logoImage.src = "Pics/Logo.jpg";
      logoImage.style.width = "200px"; // Adjust size as needed
      logoImage.style.height = "200px"; // Adjust size as needed
      logoImage.style.borderRadius = "50%"; // Make it circular
      logoImage.style.objectFit = "cover"; // Maintain aspect ratio
      logoImage.style.cursor = "default"; // Default cursor
      fullscreenLogo.appendChild(logoImage);
  
      document.body.appendChild(fullscreenLogo);
    }
  
    // Toggle full-screen mode
    if (fullscreenLogo.style.display === "block") {
      fullscreenLogo.style.display = "none";
    } else {
      fullscreenLogo.style.display = "flex"; // Show the logo
    }
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

