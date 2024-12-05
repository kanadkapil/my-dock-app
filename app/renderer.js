const fs = require('fs');
const path = require('path');

window.onload = () => {
    const configPath = path.join(__dirname, 'config.json');
    const dock = document.getElementById('dock');

    const loadConfig = () => {
        const config = JSON.parse(fs.readFileSync(configPath));
        dock.innerHTML = '';
        config.icons.forEach(icon => {
            const img = document.createElement('img');
            img.src = icon.iconPath;
            img.className = 'icon';
            img.style.width = `${config.iconSize}px`;
            img.style.height = `${config.iconSize}px`;

            img.addEventListener('click', () => {
                require('child_process').exec(icon.appPath);
            });

            dock.appendChild(img);
        });

        dock.style.flexDirection = config.orientation === 'vertical' ? 'column' : 'row';
    };

    loadConfig();
};
