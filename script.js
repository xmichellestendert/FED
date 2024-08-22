document.addEventListener('DOMContentLoaded', function() {
    // Nieuwsbrief formulier validatie en bericht
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Bedankt voor je inschrijving! Je ontvangt binnenkort onze nieuwsbrief.');
        newsletterForm.reset();
    });

    // Contactformulier validatie en bericht
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
        contactForm.reset();
    });
});
