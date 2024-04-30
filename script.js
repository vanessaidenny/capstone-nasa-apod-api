// DOM elements
$datePicker = document.getElementById('datepicker')
$favoritesContainer = document.getElementById('favorites-container')
$homeContainer = document.getElementById('home-container')
$myTabContent = document.getElementById('myTabContent')

let favoritesList = []


// DISPLAY DATE PICKER
flatpickr('.datepicker', {
    // Limit the selection for non-future date
    maxDate: new Date(),
    dateFormat: 'm/d/Y',
})
// Display date picker placeholder and change date format to Y/m/d as API
const dateOpt = { month: '2-digit', day: '2-digit', year: 'numeric' }
const defaultDate = new Date().toLocaleDateString('en-US', dateOpt);
$datePicker.defaultValue = defaultDate;


// Function to display cards
function buildCards(card) {
    const html = []

    // Search for the card in the favorites list to toggle the favorites icon
    const heartClass = favoritesList.find(favorite => favorite.date === card.date) ? "bi bi-heart-fill filled" : "bi bi-heart unfilled";

    if (card.url) {
        html.push(`<div class="text-dark card p-3 p-xl-4 mb-3">
            <div class="card-title d-flex justify-content-between align-items-center">
                <div>
                    <h3 class="fs-3">${card.title}</h3>
                    <p class="card-date py-2">${card.date}</p>
                </div>
                <div class="favorites-btn">
                    <a
                        type="button"
                        data-date="${card.date}"
                        data-title="${card.title}"
                        data-explanation="${card.explanation}"
                        data-url="${card.url}"
                        data-hdurl="${card.hdurl}"
                    >
                        <i class="${heartClass}"></i>
                    </a>
                </div>
            </div>
            <div class="card-description d-xl-flex flex-row-reverse">
                <div class="card-image d-flex justify-content-center">
                    <img src="${card.url}" alt="${card.title}">
                    <a class="zoom-btn" type="button"><i data-hdurl="${card.hdurl}" class="bi bi-zoom-in"></i></a>
                </div>
                <div class="card-text">
                    <p class="pt-3">${card.explanation}</p>
                </div>
            </div>
            </div>
        `)

    // When there is no return from the api
    } else {
        html.push(`<div class="text-dark text-center card p-3 p-xl-4 mb-3">
            <p class="text-danger">We're sorry, but there is no image available for the selected date.</p>
            <p class="text-danger">Please choose another date for your <span class="fw-semibold">AstroGazing</span> adventure.</p>
            </div>
        `)
    }
    return html
}


// Create card from api data
async function getCards() {
    const dateForApi = new Date($datePicker.value).toLocaleDateString('en-CA');

    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=txAluPlRywI7SW0aJCmR2MBjoJP43GRa0aD0jxlD&date=' + dateForApi);
    const data = await response.json();

    const html = buildCards(data);
    $homeContainer.innerHTML = html.join('');

}

getCards()
buildFavoritesTab()


// DOM Events
$myTabContent.addEventListener('click', function(e) {
    e.preventDefault()

    // Submit home button
    if(e.target.closest('.submit-button')) {
        getCards()

    // Save image in the favorites tab
    } else if(e.target.closest('.favorites-btn')) {
        // Get the button element to reference the date
        const favoriteButton = e.target.closest('.favorites-btn').querySelector('a');
        const heartIcon = favoriteButton.querySelector('i');

        if (!favoritesList.find(favorite => favorite.date === favoriteButton.dataset.date)) {
            // Add to favorites
            favoritesList.push({
                date: favoriteButton.dataset.date,
                title: favoriteButton.dataset.title,
                explanation: favoriteButton.dataset.explanation,
                url: favoriteButton.dataset.url,
                hdurl: favoriteButton.dataset.hdurl,
            });
        
            // Save in local storage
            localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
            buildFavoritesTab();
            getCards()

        } else {
            // Remove image from the favorites list
            const indexToRemove = favoritesList.findIndex(favorite => favorite.date === favoriteButton.dataset.date);
        
            if (indexToRemove !== -1) {
                favoritesList.splice(indexToRemove, 1);
        
                // Toggle the class of the heart icon back to the unfilled state
                heartIcon.classList.remove('filled');
        
                localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
                buildFavoritesTab();
                getCards()
            }
        }
    
    // Open the bigger image
    } else if (e.target.closest('.zoom-btn')) {
        const zoomButton = e.target.closest('.zoom-btn');
        // Retrieve data-hdurl attribute from the clicked zoom button
        let hdurl = zoomButton.querySelector('i').getAttribute('data-hdurl');
        createModal(hdurl)
    }

})


// Build favorites tab with the cards saved
function buildFavoritesTab() {
    const ls = JSON.parse(localStorage.getItem('favoritesList')) || [];
    favoritesList = ls;

    let html;

    if (favoritesList.length > 0) {
        html = favoritesList.map(favorite => buildCards(favorite));
    } else {
        // Display a message when there are no saved cards
        html = [`<div class="text-dark text-center card p-3 p-xl-4 mb-3">
            <p class="text-danger">You haven't saved any favorites yet.</p>
            </div>
        `]
    }

    $favoritesContainer.innerHTML = html.join('');
}


// Function to create the bigger image modal
function createModal(url) {
    // Remove any existing modal
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create a modal element
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="card p-3 p-xl-4 mb-3">
                    <img src='${url}' alt="larger-image">
                </div>
            </div>
        </div>
    `;

    // Append the modal to the document body
    document.body.appendChild(modal);

    // Show the modal using Bootstrap's native modal function
    const modalElement = document.querySelector('.modal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
}