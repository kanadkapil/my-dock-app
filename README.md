# Customizable Dock Widget

This dock widget is built with Electron and allows full customization through a JSON configuration file. Follow the instructions below to customize the dock to your liking.

---

## Features

1. **Dock Orientation**: Choose between horizontal or vertical alignment.
2. **Icon Size**: Adjust the size of the dock icons.
3. **Zoom Effect**: Enable or disable a zoom effect on hover.
4. **Startup Behavior**: Automatically start the dock when Windows boots.
5. **Icons**: Add, remove, or modify the applications and icons shown in the dock.

---

## Customization Guide

### 1. Edit the Configuration File
The file `app/config.json` controls all the settings of the dock. Open it in any text editor and modify the following fields:

- **`orientation`**: Set to `"horizontal"` or `"vertical"` for dock alignment.
- **`iconSize`**: Specify the size of each icon in pixels.
- **`zoomEffect`**: Set to `true` or `false` to enable or disable hover zoom.
- **`startOnBoot`**: Set to `true` to launch the dock on system startup.
- **`icons`**: Add objects for each application you want in the dock:
  ```json
  {
    "name": "App Name",
    "iconPath": "path/to/icon.png",
    "appPath": "path/to/application.exe"
  }


Running the Dock

Install dependencies:

npm install
npm start


This setup ensures that the dock does not overlap other windows and stays unobtrusive until triggered. Let me know if you'd like to add more features or adjustments!
