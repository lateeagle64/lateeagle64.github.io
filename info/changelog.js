async function fetchChangelog() {
    try {
        const response = await fetch('https://lateeagle64.github.io/CHANGELOG.md');
        const text = await response.text();
        const changelog = parseChangelog(text);
        const changelogElement = document.getElementById('changelog');

        changelog.forEach(entry => {
            const li = document.createElement('li');
            li.innerHTML = entry;
            changelogElement.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching changelog:', error);
    }
}

function parseChangelog(markdown) {
    const entries = markdown.split(/\n## /).slice(1);
    return entries.map(entry => {
        const title = entry.split('\n')[0];
        const details = entry.replace(/(?:\r\n|\r|\n)/g, '<br>').trim();
        return `<strong>${title}</strong><br>${details}`;
    });
}

fetchChangelog();
