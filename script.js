// Run when the page loads to display cat.gif
window.onload = function() {
    displayCat();
};

// Function to handle button clicks
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors and display cat-heart.gif
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide question
            displayCatHeart();
        });
    } else if (option === 'no') {
        // Change "No" button text and grow "Yes" button
        document.getElementById('no-button').innerText = 'No?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = parseFloat(window.getComputedStyle(yesButton).getPropertyValue('font-size'));
        yesButton.style.fontSize = (currentFontSize * 1.5) + 'px'; // Increase font size
    }
}

// Function to flash rainbow colors
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset
        if (callback) callback();
    }, 2000);
}

// Function to display cat.gif on page load
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Ensure this file is in the same directory
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display cat-heart.gif after "Yes" is clicked
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';

    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Ensure this file is in the same directory
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';

        // Create and add a hyperlink to the form
        var linkContainer = document.createElement('div');
        linkContainer.style.marginTop = '20px';

        var hyperlink = document.createElement('a');
        hyperlink.href = 'https://forms.gle/eZXiL7LrAM2hkT8W6'; // Public form link
        hyperlink.textContent = 'Click here to fill out the form';
        hyperlink.target = '_blank';
        hyperlink.style.display = 'block';
        hyperlink.style.fontSize = '18px';
        hyperlink.style.fontWeight = 'bold';
        hyperlink.style.textAlign = 'center';
        hyperlink.style.textDecoration = 'none';
        hyperlink.style.color = '#ff0000';
        hyperlink.style.backgroundColor = '#fff';
        hyperlink.style.padding = '10px';
        hyperlink.style.borderRadius = '5px';

        linkContainer.appendChild(hyperlink);
        imageContainer.appendChild(linkContainer);
    };
}

