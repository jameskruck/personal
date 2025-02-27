/**
 * Common JavaScript functions for James Kruck's personal website
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu functionality
    initMobileMenu();
    
    // Initialize scroll to top button
    initScrollToTopButton();
    
    // Initialize sidebar active link highlighting
    initSidebarHighlighting();
    
    // Initialize maps if they exist on the page
    initMaps();
});

/**
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('open');
        });
    }
}

/**
 * Scroll to top button functionality
 */
function initScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
            } else {
                scrollToTopBtn.style.opacity = '0';
            }
        });
        
        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Highlight active section in sidebar based on scroll position
 */
function initSidebarHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-link');

    if (sections.length > 0 && navLinks.length > 0) {
        function highlightActiveSidebarLink() {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (window.pageYOffset >= sectionTop - 200 && window.pageYOffset < sectionTop + sectionHeight - 200) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href && href.slice(1) === currentSection) {
                    link.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', highlightActiveSidebarLink);
        window.addEventListener('load', highlightActiveSidebarLink);
    }
}

/**
 * Initialize maps on pages that contain them
 */
function initMaps() {
    // Education map
    const educationMap = document.getElementById('education-map');
    
    if (educationMap && typeof L !== 'undefined') {
        const map = L.map('education-map').setView([46.6, -89.0], 4);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add markers for educational institutions
        const institutions = [
            {
                name: "University of Manitoba",
                position: [49.8088, -97.1344],
                degrees: ["Bachelor of Arts in Classics (2005)", "Master of Arts in Classics (2008)"],
                description: "My academic journey began here, where an elective in Classical Mythology changed my career path from accounting to Classics. I stayed for my Master's degree, where I focused on Cicero's use of Greek in his philosophical works."
            },
            {
                name: "Western University",
                position: [43.0096, -81.2737],
                degrees: ["PhD in Classics (2014)"],
                description: "At Western, I deepened my research into Roman translation practices, culminating in my dissertation 'The Modalities of Roman Translation,' which examined how Roman translators strategically positioned themselves within their literary world."
            }
        ];

        // Add markers to map
        institutions.forEach(inst => {
            const marker = L.marker(inst.position).addTo(map);
            
            marker.on('click', function() {
                // Show institution info when marker is clicked
                document.getElementById('map-info').classList.remove('hidden');
                document.getElementById('map-title').textContent = inst.name;
                
                // Create HTML for degrees and description
                let degreesList = '<ul class="list-disc list-inside mb-2">';
                inst.degrees.forEach(degree => {
                    degreesList += `<li>${degree}</li>`;
                });
                degreesList += '</ul>';
                
                document.getElementById('map-description').innerHTML = degreesList + inst.description;
            });
        });

        // Make sure markers are all visible
        const bounds = L.latLngBounds(institutions.map(inst => inst.position));
        map.fitBounds(bounds, { padding: [50, 50] });
    }
    
    // Teaching map
    const teachingMap = document.getElementById('teaching-map');
    
    if (teachingMap && typeof L !== 'undefined') {
        const map = L.map('teaching-map').setView([46.6, -89.0], 4);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add markers for teaching institutions
        const institutions = [
            {
                name: "University of Manitoba",
                position: [49.8088, -97.1344],
                roles: ["Instructor - Introduction to Latin (2008)"],
                description: "My teaching journey began here as an instructor while completing my Master's degree. I taught Latin to undergraduate students, focusing on language fundamentals and classical text analysis."
            },
            {
                name: "Western University",
                position: [43.0096, -81.2737],
                roles: ["Instructor - Introduction to Latin", "Teaching Assistant - Various Classics Courses"],
                description: "At Western, I grew as an educator through both teaching and TA roles. It was here that I began to develop my philosophy around balancing direct instruction with student-centered learning approaches."
            },
            {
                name: "Quest University",
                position: [49.7387, -123.1363],
                roles: ["Visiting Faculty - Fate and Virtue in the Ancient World"],
                description: "Quest's unique block system challenged me to reimagine my teaching approach. I shifted from lecture-based instruction to more interactive, student-driven learning experiences, restructuring my course to emphasize collaborative exploration."
            },
            {
                name: "University of Illinois Urbana-Champaign",
                position: [40.1020, -88.2272],
                roles: ["Lecturer - Readings in Latin Literature", "Lecturer - Classical Archaeology", "Lecturer - The Tragic Spirit"],
                description: "At UIUC, I designed and delivered multiple courses on ancient literature, archaeology, and tragedy. Building on earlier experiences, I implemented active learning strategies and cultural bridging techniques to make classical material accessible and relevant to students' lives."
            }
        ];

        // Add markers to map
        institutions.forEach(inst => {
            const marker = L.marker(inst.position).addTo(map);
            
            marker.on('click', function() {
                // Show institution info when marker is clicked
                document.getElementById('map-info').classList.remove('hidden');
                document.getElementById('map-title').textContent = inst.name;
                
                // Create HTML for roles and description
                let rolesList = '<ul class="list-disc list-inside mb-2">';
                inst.roles.forEach(role => {
                    rolesList += `<li>${role}</li>`;
                });
                rolesList += '</ul>';
                
                document.getElementById('map-description').innerHTML = rolesList + inst.description;
            });
        });

        // Make sure markers are all visible
        const bounds = L.latLngBounds(institutions.map(inst => inst.position));
        map.fitBounds(bounds, { padding: [50, 50] });
    }
}