// 1. Typewriter Effect for the Hero Header
const text = "INITIALIZING BIT-NEXUS PROTOCOL...";
const speed = 100;
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// 2. Star Rating Engine Logic
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
    feedback.style.color = "#00f2ff"; // Neon Cyan
    feedback.style.textShadow = "0 0 10px #00f2ff";
}

// 3. Scroll Reveal for Cultural Gallery
// This makes your NCC, Ethnic Day, and Dance sections fade in
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Start the scripts when the window loads
window.onload = () => {
    typeWriter();
    
    // Apply reveal effect to all gallery boxes
    document.querySelectorAll('.img-box').forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";
        box.style.transition = "all 0.6s ease-out";
        observer.observe(box);
    });
};
