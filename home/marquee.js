const marquee = [
    "lateeagle64.github.io",
    "made by lateeagle64 on github",
    "thanks for using my website!!",
    "share this website with others",
    "free proxies and apps!"
];

const randomMessage = marquee[Math.floor(Math.random() * marquee.length)];
const messageSpacer = Array(20).fill(randomMessage).join(' - ');

document.getElementById("marquee-text").textContent = messageSpacer;
