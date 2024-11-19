
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