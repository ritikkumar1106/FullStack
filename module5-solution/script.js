// TODO: STEP 0: Define a random category short name
function getRandomCategoryShortName() {
    // Get a random array index into the categories array
    var randomArrayIndex = Math.floor(Math.random() * categories.length);
  
    // Return the short name of the category at the random index
    return categories[randomArrayIndex].short_name;
  }
  
  // TODO: STEP 1: Change the home HTML snippet to insert a random category short name
  // into the function call of the following code:
  // <a href="#" onclick="$dc.loadMenuItems('SP');">
  
  function getHomeHTMLSnippetWithRandomCategoryShortName() {
    // Get the home HTML snippet
    var homeHtmlSnippet = document.querySelector('#home-snippet').innerHTML;
  
    // Get a random category short name
    var randomCategoryShortName = getRandomCategoryShortName();
  
    // Substitute the random category short name into the function call in the home HTML snippet
    homeHtmlSnippet = homeHtmlSnippet.replace('{{randomCategoryShortName}}', randomCategoryShortName);
  
    // Return the home HTML snippet with the random category short name substituted
    return homeHtmlSnippet;
  }
  
  // TODO: STEP 2: Add an event listener to the Specials tile to load the random category menu page
  document.querySelector('#specials-tile').addEventListener('click', function() {
    // Get the home HTML snippet with the random category short name substituted
    var homeHtmlSnippetWithRandomCategoryShortName = getHomeHTMLSnippetWithRandomCategoryShortName();
  
    // Set the inner HTML of the main content element to the home HTML snippet with the random category short name substituted
    document.querySelector('#main-content').innerHTML = homeHtmlSnippetWithRandomCategoryShortName;
  
    // Load the random category menu page
    $dc.loadMenuItems(randomCategoryShortName);
  });
  
  // TODO: STEP 3: Add an event listener to the restaurant logo to go back to the home page
  document.querySelector('#restaurant-logo').addEventListener('click', function() {
    // Load the home page
    window.location.href = '/';
  });
  
  // TODO: STEP 4: Verify that the desired functionality is working correctly.
  // Use Browser Sync or deploy your solution to GitHub pages.
  // Load the home page in the browser.
  // Click on the Specials tile. A single page category with a list of menu items for some category should appear.
  // Click on the restaurant logo to go back to the home page.
  // Click on the Specials tile again. Most likely, a different single page category page will be shown.
  // Repeat this several times to make sure that most of the time you see a different single category page.
  