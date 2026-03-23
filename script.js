function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const message = document.getElementById("formMessage");
  message.textContent = "Thanks! We'll get back to you soon.";
  message.style.color = "#ff7a00";

  this.reset();
});
