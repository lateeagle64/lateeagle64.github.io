const marquee = [
    "lateeagle64.github.io",
    "made by lateeagle64 on github",
    "thanks for using my website",
];

// Select a random message from the array
const randomMessage = marquee[Math.floor(Math.random() * marquee.length)];

// Update the marquee content
document.getElementById("marquee-text").textContent = randomMessage;
