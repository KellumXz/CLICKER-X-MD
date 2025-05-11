const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'Session___id' : process.env.SESSION_ID,
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'KellumXz' : process.env.GITHUB_USER_NAME,
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'OfxpkwujJH5WVgPMQ2W1x53js2QxyJ3lXqsm' : process.env.GITHUB_AUTH_TOKEN
};