# SAMP INFO QUE NPM PACKAGE

A simple Node.js module to fetch and display information from SA-MP (San Andreas Multiplayer) servers.

## 📦 Installation

```bash
npm install sampinfoque
```

## 🚀 Usage

```javascript
const SampInfo = require('sampinfoque');

const samp = new SampInfo({
    serverInfoUrl: 'https://www.gs4u.net/en/s/80410.html',
});

const start = async () => {
    const data = await samp.fetchServerInfo();
    console.log(data);
}

start();
```

## 🔧 Features

- Fetch detailed information from SA-MP servers.
- Easy to set up and use with minimal configuration.
- Handles errors gracefully.

## 📝 Notes

- Ensure that the server URL is accessible and correctly formatted.
- The module retrieves real-time information, so server status may vary.

## 🛠️ Troubleshooting

If you encounter issues while fetching server information:
1. Verify that the server URL is correct.
2. Check if the server is running and accessible.
3. Make sure your network connection is stable.

## 🤝 Contributing

Feel free to open issues or submit pull requests for improvements and bug fixes!
