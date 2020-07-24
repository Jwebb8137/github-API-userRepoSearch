'use strict';

const searchURL = 'https://api.github.com/users/:username/repos';

function displayResults(responseJson) {
  // if there are previous results, remove them
  console.log(responseJson);
  $('#results-list').empty();
  // iterate through the articles array, stopping at the max number of results
  console.log('Before loop');
  for (let i = 0; i < responseJson.length; i++){
    // for each video object in the articles
    //array, add a list item to the results 
    //list with the article title, source, author,
    //description, and image
    console.log('In loop');
    $('#results-list').append(`
        <a href="${responseJson[i].html_url}">${responseJson[i].full_name}</a>
      `
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};

function getRepos(searchTerm) {
  const url = `https://api.github.com/users/${searchTerm}/repos`;
  https://api.github.com//users/:username/repos

  console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val();
    getRepos(searchTerm);
  });
}

$(watchForm);