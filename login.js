const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
	
	await page.goto('https://healthy.kaiserpermanente.org/', {waitUntil: 'networkidle'});
	await page.focus('#userid');
	await page.keyboard.type('d3eight', {delay: 50});
	
	await page.focus('#password');
	await page.keyboard.type('validate1', {delay: 10});
	
	const mous = page.mouse;
	await mous.click(640, 124);
	await page.waitForNavigation('load');
	
	console.log(await browser.version());
	console.log(await page.url());
	
    browser.close();
    return {}
};

scrape().then((value) => {
    console.log(value); // Success!
});
