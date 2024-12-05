const fs = require('fs');
const path = require('path');

window.onload = () => {
  const configPath = path.join(__dirname, 'config.json');
  const dock = document.getElementById('dock');

  // Dragging setup
  let isDragging = false;
  let offsetX, offsetY;

  dock.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - dock.getBoundingClientRect().left;
    offsetY = e.clientY - dock.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      dock.style.left = `${e.clientX - offsetX}px`;
      dock.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Load and apply configuration settings
  const loadConfig = () => {
    const config = JSON.parse(fs.readFileSync(configPath));

    dock.innerHTML = ''; // Clear existing dock content

    // Populate dock with icons
    config.icons.forEach(icon => {
      const img = document.createElement('img');
      img.src = icon.iconPath;
      img.className = 'icon';
      img.style.width = `${config.iconSize}px`;
      img.style.height = `${config.iconSize}px`;

      // Zoom effect on hover
      img.addEventListener('mouseover', () => {
        if (config.zoomEffect) {
          img.style.transform = 'scale(1.2)';
        }
      });

      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });

      // Launch associated application on click
      img.addEventListener('click', () => {
        require('child_process').exec(icon.appPath);
      });

      dock.appendChild(img);
    });

    // Adjust dock orientation
    dock.style.flexDirection = config.orientation === 'vertical' ? 'column' : 'row';
  };

  loadConfig();
};
