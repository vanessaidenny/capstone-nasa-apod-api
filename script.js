// Update the text of the <h1> element with the provided string
const $title = document.getElementById('title')
$title.innerHTML = 'AstroGaze'

// Display date picker and set default value as today date
flatpickr('.datepicker');
document.getElementById('datepicker').defaultValue = new Date().toLocaleDateString();

// Change favorite icon
$favoriteIcon = document.getElementById('favorites-icon')

// Create card
function createCards() {
    // Add card html to generate from api data
}