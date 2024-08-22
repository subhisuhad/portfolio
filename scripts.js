document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('ul#menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor click behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target element's ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Smooth scrolling
                    block: 'start' // Aligns the top of the target element to the top of the viewport
                });
            }
        });
    });
});