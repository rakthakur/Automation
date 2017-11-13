const puppeteer = require('puppeteer');
const config = require('config');

let login = async () => {
	const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
	
	var uname = config.get('SiteLogin.Username');
	var pwd = config.get('SiteLogin.Password');
	
	console.log(await browser.version());
	
	await page.goto('https://healthy.kaiserpermanente.org/', {waitUntil: 'networkidle'});
	await page.focus('#userid');
	await page.keyboard.type(uname, {delay: 50});
	
	await page.focus('#password');
	await page.keyboard.type(pwd, {delay: 10});
	
	const mouse = page.mouse;
	await mouse.click(676, 230);
	await page.waitForNavigation('load');
	
	//check for successful login
	var currentPage = page.url();
	console.log(await page.url());

	if(currentPage.indexOf('sign-on') != -1 )
	{
		console.log('Issue Logging in');
	};	
	
    browser.close();
    return {}
};



login().then((value) => {
    console.log('script completed'); // Success!
});