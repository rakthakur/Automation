module.exports = {
    headless: false,
	disableDeviceEmulation: true,
    args: [
        '--remote-debugging-port=9222',
		'--disable-device-emulation',
		'--disable-network-throttling',
		'--disable-cpu-throttling'
    ]
};