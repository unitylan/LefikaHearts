// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

// Formspree AJAX submission (no redirect)
const forms = document.querySelectorAll('.form');

forms.forEach(form => {
    form.addEventListener('submit', async function (e) {
        e.preventDefault(); // stop Formspree redirect

        // Native validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('Thank you for your submission! We will be in touch soon.');
                form.reset(); // reset ONLY after success
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            alert('Network error. Please check your connection.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
});
});




