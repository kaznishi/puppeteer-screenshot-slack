const fs = require('fs');
const request = require('request');
const puppeteer = require('puppeteer');

// For puppeteer
const TARGET_URL = (process.env.URL === undefined) ? 'http://example.com' : process.env.URL;
const FILE_NAME = (process.env.FILE_NAME === undefined) ? 'image.png' : process.env.FILE_NAME;
const PAGE_WIDTH = (process.env.WIDTH === undefined) ? 1280 : Number(process.env.WIDTH);
const PAGE_HEIGHT = (process.env.HEIGHT === undefined) ? 720 : Number(process.env.HEIGHT);
const PAGE_WAIT = (process.env.WAIT === undefined) ? 0 : Number(process.env.WAIT);

// For posting to slack
const API_URL = 'https://slack.com/api/files.upload';
const SLACK_BOT_TOKEN = (process.env.BOT_TOKEN === undefined) ? "DUMMYTOKEN" : process.env.BOT_TOKEN;
const SLACK_CHANNEL = (process.env.CHANNEL === undefined) ? "DUMMYTOKEN" : process.env.CHANNEL;

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.goto(TARGET_URL);
  await page.setViewport({
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT
  });
  await page.waitFor(PAGE_WAIT);
  await page.screenshot({path: FILE_NAME});
  
  await browser.close();

  var data = {
    url: API_URL,
    formData: {
      token: SLACK_BOT_TOKEN,
      filename: FILE_NAME,
      file: fs.createReadStream('./' + FILE_NAME),
      channels: SLACK_CHANNEL
    }
  };
  request.post(data, function(error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log('Success!!!');
      } else {
          console.log('Failure...');
      }
  });

})();