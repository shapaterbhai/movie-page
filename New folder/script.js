        // Function to handle smooth scrolling
        function smoothScroll(target) {
            const element = document.querySelector(target);
            if (element) {
                const offset = 100; // Adjust the offset as needed
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Add event listeners to the navigation links for smooth scrolling
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const target = link.getAttribute('href');
                smoothScroll(target);
            });
        });