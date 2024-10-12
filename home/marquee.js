const marquee = [
    "lateeagle64.github.io",
    "made by lateeagle64 on github",
    "thanks for using my website",
];

// Select a random message from the array
const randomMessage = marquee[Math.floor(Math.random() * marquee.length)];

// Repeat the message 10 times, with a space after each one except the last
const repeatedMessage = Array(10).fill(randomMessage).join(' ');

// Update the marquee content
document.getElementById("marquee-text").textContent = repeatedMessage;
