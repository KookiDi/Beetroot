const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const typeSelect = document.getElementById('type-select');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const url = `http://www.omdbapi.com/?s=${searchInput.value}&type=${typeSelect.value}&apikey=96d349bb`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayResults(data.Search);
            } else {
                displayMessage('Movie not found!');
            }
        })
        .catch(error => {
            console.error(error);
            displayMessage('An error occurred while fetching the data.');
        });
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    results.forEach(function(movie) {
        const div = document.createElement('div');
        div.classList.add('movie');
        div.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h2>${movie.Title}</h2>
      <p>Type: ${movie.Type}</p>
      <p>Year: ${movie.Year}</p>
    `;
        resultsContainer.appendChild(div);
    });
}

function displayMessage(message) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = `<p>${message}</p>`;
}