document.addEventListener("DOMContentLoaded", () => {
    const proxies = [
        {
            name: "Interstellar",
            image: "https://lateeagle64.github.io/images/interstellar.png",
            urls: [
                "https://welcome.chillat.net/",
                "https://social.valah.net/",
                "https://services.nexus-computing.com/"
            ]
        }
    ];

    const proxyContainer = document.getElementById("proxy-container");
    const overlay = document.getElementById("overlay");
    const proxyLinks = document.getElementById("proxy-links");
    const proxyName = document.getElementById("proxy-name");
    const closeBtn = document.getElementById("close");

    // Function to create proxy images dynamically
    proxies.forEach(proxy => {
        const img = document.createElement("img");
        img.src = proxy.image;
        img.alt = proxy.name;
        img.className = "proxy-image";
        img.dataset.name = proxy.name;
        img.dataset.urls = JSON.stringify(proxy.urls);
        
        // Attach click event to open overlay
        img.addEventListener("click", () => showOverlay(proxy.name, proxy.urls));
        proxyContainer.appendChild(img);
    });

    // Function to show overlay
    const showOverlay = (name, urls) => {
        overlay.classList.remove("hidden");
        overlay.classList.add("visible");

        // Update the overlay with the selected proxy name and links
        proxyName.textContent = name;
        proxyLinks.innerHTML = "";
        urls.forEach(url => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = url;
            a.textContent = url;
            a.target = "_blank";
            li.appendChild(a);
            proxyLinks.appendChild(li);
        });
    };

    // Function to hide overlay
    const hideOverlay = () => {
        overlay.classList.remove("visible");
        overlay.classList.add("hidden");
    };

    // Attach event to close button
    closeBtn.addEventListener("click", hideOverlay);
});
