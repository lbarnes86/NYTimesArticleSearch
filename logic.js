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