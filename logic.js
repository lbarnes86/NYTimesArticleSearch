/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
 function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    var queryParams = { "api-key": "S7nxIhnReAWrgZzruqg4uDOZ4YItUUc4" };

    // Grab text the user typed into the search input, add to the queryParams object
  queryParams.q = $("#search-term")
  .val()
  .trim();

// If the user provides a startYear, include it in the queryParams object
var startYear = $("#start-year")
  .val()
  .trim();
  if (parseInt(startYear)) {
    queryParams.begin_date = startYear + "0101";
  }