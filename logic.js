/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
 function buildQueryURL() {
    // queryURL is the url we'll use to query the API
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  
    // Begin building an object to contain our API call's query parameters
    // Set the API key
    let queryParams = { "api-key": "S7nxIhnReAWrgZzruqg4uDOZ4YItUUc4" };

    // Grab text the user typed into the search input, add to the queryParams object
  queryParams.q = $("#search-term")
  .val()
  .trim();

// If the user provides a startYear, include it in the queryParams object
let startYear = $("#start-year")
  .val()
  .trim();
  if (parseInt(startYear)) {
    queryParams.begin_date = startYear + "0101";
  }
  if (parseInt(startYear)) {
    queryParams.begin_date = startYear + "0101";
  }

  // If the user provides an endYear, include it in the queryParams object
  let endYear = $("#end-year")
    .val()
    .trim();

  if (parseInt(endYear)) {
    queryParams.end_date = endYear + "0101";

      // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
} 

/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} NYTData - object containing NYT API data
 */
function updatePage(NYTData) {
  // Get from the form the number of results to display
  // API doesn't have a "limit" parameter, so we have to do this ourselves
  let numArticles = $("#article-count").val();

  // Log the NYTData to console, where it will show up as an object
  console.log(NYTData);
  console.log("------------------------------------");

  // Loop through and build elements for the defined number of articles
  for (var i = 0; i < numArticles; i++) {
    // Get specific article info for current index
    let article = NYTData.response.docs[i];