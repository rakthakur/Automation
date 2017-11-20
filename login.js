const puppeteer = require('puppeteer');
//const puppeteerLighthouse = require('puppeteer-lighthouse');
const config = require('config');
const lighthouse = require('lighthouse');
const settings = require('./config/settings');
//chromeLauncher = require('chrome-launcher');
//const log = require('lighthouse-logger');
//const flags = {logLevel: 'error', output: 'json'};

var uname = config.get('SiteLogin.Username');
var pwd = config.get('SiteLogin.Password');

let collectData = async () => {

	const browser = await puppeteer.launch(settings);
    const page = await browser.newPage();
	
	console.log(await browser.version());
	console.log(await browser.wsEndpoint());
	
	await page.goto('https://healthy.kaiserpermanente.org/', {waitUntil: 'networkidle2'});
	//check for successful login
	
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
		browser.close();
		return {}
	};	
	
	// Store the endpoint to be able to reconnect to Chromium
	const browserWSEndpoint = browser.wsEndpoint();
	// Disconnect puppeteer from Chromium
	browser.disconnect();

	
	return {}
	
	

	//var report = await lighthouse (currentPage, settings, null);
	//console.log(report);

};

collectData().then((value) => {
    console.log('Script completed!'); // Success!
});
