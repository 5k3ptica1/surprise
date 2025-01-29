// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "No?"
        document.getElementById('no-button').innerText = 'No?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';

    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');

    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    catHeartImage.alt = 'Cat Heart';

    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);

        // Hide the options container
        document.getElementById('options').style.display = 'none';

        // Create and add a hyperlink to the second page
        var linkContainer = document.createElement('div');
        linkContainer.style.marginTop = '20px'; // Add spacing

        var hyperlink = document.createElement('a');
        hyperlink.href = 'https://forms.gle/eZXiL7LrAM2hkT8W6';
        hyperlink.textContent = 'Click here to fill out the form';
        hyperlink.target = '_blank'; // Open in new tab
        hyperlink.style.display = 'block';
        hyperlink.style.fontSize = '18px';
        hyperlink.style.fontWeight = 'bold';
        hyperlink.style.textAlign = 'center';
        hyperlink.style.textDecoration = 'none';
        hyperlink.style.color = '#ff0000'; // Change color if needed

        linkContainer.appendChild(hyperlink);
        document.body.appendChild(linkContainer); // Append below the cat image
    };
}
