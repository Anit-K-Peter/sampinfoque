# SAMP INFO QUE NPM PACKAGE

A simple Node.js module to fetch and display information from SA-MP (San Andreas Multiplayer) servers.

## 📦 Installation

```bash
npm install sampinfoque
```

---

## 📋 Step-by-Step Guide To Get URL
To use the `sampinfoque` npm package, you need a valid `serverInfoUrl` from GS4u.net. Follow the steps below to obtain this URL:

<details>
<summary><strong>Step 1: Visit GS4u.net</strong></summary>
Go to [GS4u.net](https://www.gs4u.net), a platform that provides SA-MP server listings.
</details>

<details>
<summary><strong>Step 2: Search for Your Server</strong></summary>
1. Use the search bar on the homepage to find your SA-MP server.
2. Type your server's name, IP address, or keywords to locate it.
</details>

<details>
<summary><strong>Step 3: Open Your Server's Details Page</strong></summary>
1. From the search results, click on your server listing.
2. This will open the server details page showing information such as player count, hostname, game mode, and more.
</details>

<details>
<summary><strong>Step 4: Copy the Page URL</strong></summary>
1. Once you're on the server details page, copy the URL from your browser's address bar.
2. This URL is your `serverInfoUrl`. It should look something like this:
</details>

---
##  Usage server.js

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
## Output
![](https://cdn.discordapp.com/attachments/1079951331760017418/1297122267016466463/SPOILER_image.png?ex=6714c6bf&is=6713753f&hm=2546157be9fd258b1150a4c323fd803a87976e5a23dd093f0e54798883a0601a&)

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
