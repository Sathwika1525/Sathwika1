// SCROLL REVEAL
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// EMAILJS FORM
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    })
    .then(() => {
        document.getElementById("status").innerHTML =
            "✔ Message sent successfully!";
    })
    .catch(() => {
        document.getElementById("status").innerHTML =
            "❌ Failed! Try again.";
    });
});
