const marquee = [
    "lateeagle64.github.io",
    "made by lateeagle64 on github",
    "thanks for using my website!!",
    "share this website with others",
    "free unblocked proxies!!",
    "started development on Oct 10, 2024!!",
    "go to 'proxies' to play games!!",
    "work in progress!!",
    "this website is E for everyone!!",
    "proxies get blocked regularly, wait until they get fixed!!",
    "go to https://lateeagle64.github.io/minecraft/ for a secret minecraft link!!",
];

const randomMessage = marquee[Math.floor(Math.random() * marquee.length)];
const messageSpacer = Array(20).fill(randomMessage).join(' - ');

document.getElementById("marquee-text").textContent = messageSpacer;
