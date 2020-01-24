const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://genius.com/Booba-salside-lyrics');

  const lyricsContainer = await page.$eval('.lyrics', e => e.innerText);
  console.log(lyricsContainer);

  await browser.close();
})();
