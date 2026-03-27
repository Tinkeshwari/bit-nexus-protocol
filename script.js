console.log("JS Loaded ✅");
alert("JS IS WORKING");

// ===============================
// EMAILJS INIT (PUT YOUR KEY)
// ===============================
(function () {
    emailjs.init("s3TItCcc2pQ66Em6f");
})();

// ===============================
// TYPEWRITER EFFECT
// ===============================
const text = "INITIALIZING BIT-NEXUS PROTOCOL...";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

// ===============================
// STAR RATING
// ===============================
function rate(stars) {
    const feedback = document.getElementById("feedback-msg");

    const messages = [
        "System Error: Vibe too low.",
        "Protocol Accepted. Basic level.",
        "Data Synced. Good energy.",
        "High Frequency Detected!",
        "MAXIMUM VIBE: Bit-Nexus Fully Initialized!"
    ];

    feedback.innerHTML = messages[stars - 1];
    feedback.style.color = "#00f2ff";
    feedback.style.textShadow = "0 0 10px #00f2ff";
}

// ===============================
// SCROLL ANIMATION
// ===============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

// ===============================
// EMAIL FUNCTION
// ===============================
function sendData() {
    const status = document.getElementById("form-status");
    status.innerText = "Sending...";

    const params = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value,
        message: document.querySelector("textarea[name='message']").value
    };

    console.log("Trying to send email...");

    emailjs.send("service_zbwf7t6", "template_gbnsntm", params)
        .then((res) => {
            console.log("SUCCESS", res);
            status.innerText = "Message sent successfully!";
        })
        .catch((err) => {
            console.log("ERROR", err);
            status.innerText = "Failed to send message ❌";
        });
}

// ===============================
// ON LOAD
// ===============================
window.onload = () => {
    typeWriter();

    document.querySelectorAll('.img-box').forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";
        box.style.transition = "all 0.6s ease-out";
        observer.observe(box);
    });
};