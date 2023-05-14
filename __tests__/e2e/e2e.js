//install puppeteer => npm i puppeteer
const puppeteer = require('puppeteer');
async function main(){
    //launch browser
   const browser  = await puppeteer.launch({headless:false});
   //create new page
   const page = await browser.newPage();
   // go to the url
   await page.goto('http://127.0.0.1:5500/__tests__/e2e/mysite.html');
   await page.type('input[id=email]', 'hammadalaa989@email.com') ;
   await page.waitForTimeout(5000);
   await page.click('input[id=submit]') ;
  
}
main();