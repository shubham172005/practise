document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    var dropdown = document.getElementById('home-dropdown');
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('#home-link')) {
        var dropdown = document.getElementById('home-dropdown');
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}
