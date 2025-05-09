// Event listener for opening the modal
document.querySelectorAll('.image-item').forEach(function(imgElement) {
    imgElement.addEventListener('click', function() {
        showFullImage(imgElement);
    });
});

// Show the image in the modal
function showFullImage(imgElement) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    fullImage.src = imgElement.src;  // Set the source of the modal image
    modal.style.display = "block";    // Show the modal
}

// Close the modal when clicked outside the image
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";     // Hide the modal
}
