const marquee = [
    "lateeagle64.github.io",
    "made by lateeagle64 on github",
    "thanks for using my website",
];

const randomMessage = marquee[Math.floor(Math.random() * marquee.length)];
const messageSpacer = Array(10).fill(randomMessage).join(' - ');

document.getElementById("marquee-text").textContent = messageSpacer;
