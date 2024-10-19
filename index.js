const axios = require('axios');
const cheerio = require('cheerio');

class SampInfo {
    constructor({ serverInfoUrl }) {
        this.serverInfoUrl = serverInfoUrl; // Use the provided URL directly
    }

    async fetchServerInfo() {
        try {
            const response = await axios.get(this.serverInfoUrl);
            const $ = cheerio.load(response.data);

            const serverInfo = {};

            serverInfo.serverName = $('h1[itemprop="name"]').text().trim();
            serverInfo.status = $('.status .value .serverstatustext').text().trim();
            serverInfo.ipPort = $('#server_addr_0').text().trim();
            serverInfo.game = $('.baseinfo .row-fluid:nth-child(2) .value a').text().trim();
            serverInfo.mode = $('.baseinfo .row-fluid:nth-child(3) .value').text().trim();
            serverInfo.version = $('.baseinfo .row-fluid:nth-child(4) .value').text().trim();
            const playersOnlineText = $('.baseinfo .row-fluid:nth-child(5) .value .playersonline b').first().text().trim();
            serverInfo.playersOnline = parseInt(playersOnlineText, 10) || 0;
            serverInfo.location = $('.baseinfo .row-fluid:nth-child(6) .value b').text().trim();
            serverInfo.added = $('.baseinfo .row-fluid:nth-child(7) .value').text().trim();
            serverInfo.lastUpdated = $('#server_countdown').text().trim();

            const players = [];
            $('.serverplayers tbody tr').each((index, row) => {
                const playerName = $(row).find('td.other_color_text').text().trim();
                const score = $(row).find('td.score').text().trim();
                const ping = $(row).find('td.ping').text().trim();

                players.push({ playerName, score, ping });
            });

            serverInfo.players = players;

            return serverInfo;
        } catch (error) {
            console.error('Error fetching server information:', error);
            return null;
        }
    }
}

module.exports = SampInfo;