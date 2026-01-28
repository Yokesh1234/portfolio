
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Add e-ink refresh effect to menu
            mainNav.classList.add('e-ink-refresh');
            setTimeout(() => {
                mainNav.classList.remove('e-ink-refresh');
            }, 300);
        });
        
        // Section Management
        const sections = {
            home: document.getElementById('home'),
            about: document.getElementById('about'),
            projects: document.getElementById('projects'),
            contact: document.getElementById('contact')
        };
        
        const navLinks = document.querySelectorAll('.nav-link');
        const navBtns = document.querySelectorAll('.nav-btn');
        const closeSectionBtn = document.getElementById('closeSectionBtn');
        const sectionIndicator = document.getElementById('sectionIndicator');
        const currentSectionName = document.getElementById('currentSectionName');
        
        // Close buttons in sections
        const closeButtons = document.querySelectorAll('.close-section');
        
        // Section titles for display
        const sectionTitles = {
            home: "Home",
            about: "About & Skills",
            projects: "Projects",
            contact: "Contact"
        };
        
        // Function to show a specific section
        function showSection(sectionId) {
            // Trigger e-ink refresh animation
            const refreshIndicator = document.querySelector('.refresh-indicator');
            refreshIndicator.classList.add('active');
            
            setTimeout(() => {
                // Hide all sections first
                Object.keys(sections).forEach(key => {
                    sections[key].classList.remove('active');
                    if (key !== 'home') {
                        sections[key].style.display = 'none';
                    }
                });
                
                // Show home section if requested, otherwise hide it
                if (sectionId === 'home') {
                    sections.home.style.display = 'grid';
                    sectionIndicator.style.display = 'none';
                } else {
                    sections.home.style.display = 'none';
                    sections[sectionId].style.display = 'block';
                    setTimeout(() => {
                        sections[sectionId].classList.add('active');
                    }, 50);
                    
                    // Show section indicator
                    sectionIndicator.style.display = 'flex';
                    currentSectionName.textContent = sectionTitles[sectionId];
                }
                
                // Update active navigation
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.add('active');
                    }
                });
                
                // Update active nav buttons
                navBtns.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-section') === sectionId) {
                        btn.classList.add('active');
                    }
                });
                
                // Reset refresh indicator
                setTimeout(() => {
                    refreshIndicator.classList.remove('active');
                }, 1000);
                
                // Scroll to top of the page
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
        
        // Add click event to navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('data-section');
                showSection(sectionId);
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
        
        // Add click event to navigation buttons
        navBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section');
                showSection(sectionId);
            });
        });
        
        // Add click event to close buttons in sections
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section') || 'home';
                showSection(sectionId);
            });
        });
        
        // Close section button in indicator
        closeSectionBtn.addEventListener('click', () => {
            showSection('home');
        });
        
        // Contact form submission with e-ink effect
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Add e-ink refresh animation
            const refreshIndicator = document.querySelector('.refresh-indicator');
            refreshIndicator.classList.add('active');
            
            // Simulate form submission
            setTimeout(() => {
                // Show success message
                alert(`Thank you, ${name}! Your message has been sent. I'll respond to ${email} soon.`);
                
                // Reset form
                contactForm.reset();
                
                // Reset refresh indicator
                setTimeout(() => {
                    refreshIndicator.classList.remove('active');
                }, 1000);
            }, 800);
        });
        
        // Initialize with home section visible
        showSection('home');
        
        // Add subtle hover effect to project cards
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });