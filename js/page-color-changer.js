// Wait until the window has loaded to run the code
window.onload = function() {
    // Get references to the red, green, and blue sliders
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');

    // Function to change background color based on the slider values
    function updateBackgroundColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;
        
        // Change the background color of the body
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    // Add event listeners to each slider to call updateBackgroundColor when changed
    redSlider.addEventListener('input', updateBackgroundColor);
    greenSlider.addEventListener('input', updateBackgroundColor);
    blueSlider.addEventListener('input', updateBackgroundColor);

    // Initialize the background color
    updateBackgroundColor();
};
