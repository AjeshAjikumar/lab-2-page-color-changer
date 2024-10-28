// Wait until the window has fully loaded before running the code to ensure elements are accessible
window.onload = function() {
    // Get references to the red, green, and blue slider elements by their IDs
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');

    // Function to update the background color of the page based on the slider values
    function updateBackgroundColor() {
        // Retrieve the current values of the red, green, and blue sliders
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
        
        // Set the background color of the body using the RGB values from the sliders
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    // Add event listeners to each slider; call updateBackgroundColor whenever the value changes
    redSlider.addEventListener('input', updateBackgroundColor);
    greenSlider.addEventListener('input', updateBackgroundColor);
    blueSlider.addEventListener('input', updateBackgroundColor);

    // Set the initial background color based on the default values of the sliders
    updateBackgroundColor();
};
