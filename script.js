document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("formMessage").classList.remove("hidden");
    this.reset();
});
