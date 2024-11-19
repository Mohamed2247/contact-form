// Initialize Google Map
function initMap() {
    const location = { lat: 40.712776, lng: -74.005974 }; // New York coordinates as an example

    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 14,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Form Validation and Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("تم إرسال رسالتك بنجاح!");
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
});
