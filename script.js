// --- THE BIT-NEXUS PROTOCOL LOGIC ---

// 1. Typewriter Effect
const myName = "Tinkeshwari Loganathan";
let index = 0;
const speed = 120; // Speed in milliseconds

function typeWriter() {
    const typewriterElement = document.getElementById("typewriter");
    
    if (index < myName.length) {
        typewriterElement.innerHTML += myName.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// 2. Star Rating Engine
function rate(stars) {
    const feedback = document.getElementById("feedback-msg");
    
    // Custom messages based on the rating
    let response = "";
    if (stars === 5) response = "Protocol Intensity: MAXIMUM. 🚀";
    else if (stars >= 3) response = "System Feedback: Positive. ✨";
    else response = "Optimization Required. 🛠️";
    
    feedback.innerText = response;
    
    // Add a small glow effect to the message
    feedback.style.textShadow = "0 0 10px var(--neon)";
    
    console.log(`User Rating Received: ${stars} Stars`);
}

// 3. Initialize everything when the page loads
window.onload = function() {
    typeWriter();
};
