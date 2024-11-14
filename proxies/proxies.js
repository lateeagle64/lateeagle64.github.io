document.addEventListener("DOMContentLoaded", () => {
    const proxies = [
        {
            name: "Interstellar",
            image: "https://lateeagle64.github.io/images/interstellarBG.png",
            selectImage: "https://lateeagle64.github.io/images/interstellarBGSelected.png",
            urls: [
                "https://interstellar-production-9abe.up.railway.app/",
            ],
        },
        {
            name: "Rammerhead",
            image: "https://lateeagle64.github.io/images/rammerheadBG.png",
            selectImage: "https://lateeagle64.github.io/images/rammerheadBGSelected.png",
            urls: [
                "https://savvasrealize.triplewipe.ru/",
                "https://savvasrealize.cbu.net/",
            ],
        }
    ];

    const proxyContainer = document.getElementById("proxy-container");
    const overlay = document.getElementById("overlay");
    const proxyLinks = document.getElementById("proxy-links");
    const proxyName = document.getElementById("proxy-name");
    const closeBtn = document.getElementById("close");

    proxies.forEach(proxy => {
        const img = document.createElement("img");
        img.src = proxy.image;
        img.alt = proxy.name;
        img.style.width = "40%";
        img.style.height = "auto";
        img.className = "proxy-image";
        img.dataset.name = proxy.name;
        img.dataset.urls = JSON.stringify(proxy.urls);

        img.addEventListener("mouseenter", () => {
            img.src = proxy.selectImage;
        });

        img.addEventListener("mouseleave", () => {
            img.src = proxy.image;
        });

        img.addEventListener("click", () => showOverlay(proxy.name, proxy.urls));
        proxyContainer.appendChild(img);
    });

    const showOverlay = (name, urls) => {
        overlay.classList.remove("hidden");
        overlay.classList.add("visible");

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

    const hideOverlay = () => {
        overlay.classList.remove("visible");
        overlay.classList.add("hidden");
    };

    closeBtn.addEventListener("click", hideOverlay);
});
