ScrollReveal().reveal('.hero-left', { origin: 'left', distance: '50px', duration: 1000, delay: 300 });
// ScrollReveal().reveal('.hero-right', { origin: 'right', distance: '50px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.navbar', { origin: 'top', distance: '20px', duration: 800, delay: 200 });
// ScrollReveal().reveal('.about-img', { origin: 'left', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.about-content', { origin: 'right', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.contact-section', { origin: 'bottom', distance: '60px', duration: 1000, delay: 300 });

// WhatsApp function
function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const phone = "919599353405"; // Your number
  const link = `https://wa.me/${phone}?text=${text}`;

  window.open(link, "_blank");
}

// Email function
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const formAction = "https://formsubmit.co/khushversee@gmail.com"; // Your email

  const formData = new FormData(form);
  fetch(formAction, {
    method: "POST",
    body: formData,
  })
    .then(() => {
      alert("Email sent successfully!");
      form.reset();
    })
    .catch(() => {
      alert("Failed to send email.");
    });
}
