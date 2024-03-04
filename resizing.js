// Function to handle the resize event
const handleResize = debounce(function() {
    const headerH1 = document.querySelector('.header h1');

    // Check if the window width has changed significantly
    if (window.innerWidth >= 850 && !localStorage.getItem('titleChanged')) {
        // Add a class to trigger animation and styling
        headerH1.classList.add('larger-screen');
        
        // Set a flag indicating that the title has been changed
        localStorage.setItem('titleChanged', true);
    } else if (window.innerWidth < 850) {
        // Remove the class to reset animation and styling
        headerH1.classList.remove('larger-screen');
        
        // Clear the flag indicating title change
        localStorage.removeItem('titleChanged');
    }
}, 250); // Adjust the debounce wait time as needed

// Check the initial window width and set the title accordingly
if (window.innerWidth < 850) {
    const headerH1 = document.querySelector('.header h1');
    headerH1.classList.remove('larger-screen');
}
