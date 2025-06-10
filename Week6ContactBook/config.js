

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

// Function to check if API key is set, if not, redirect to enter-api-key page
function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
    window.open("enter-api-key.html", "_self");
    } 
    return localStorage.getItem("apiKey");
}