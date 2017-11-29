const { spawn } = require('child_process');

const args = process.argv;
console.log(args);

	if (args[2] == 'login') {	
		const child = spawn('node', ['./login.js'], {
		  detached: true,
		  stdio: 'ignore'
		});

		child.unref();
	}
	
	else if (args[2] == 'login-mobile') {	
		const child = spawn('node', ['./login-mobile.js'], {
		  detached: true,
		  stdio: 'ignore'
		});

		child.unref();
	}	

	else if (args[2] == 'close') {	
		const child = spawn('node', ['./close.js'], {
		  detached: true,
		  stdio: 'ignore'
		});

		child.unref();
	}

	
	else {
		console.log('invalid input');
		return {}
	}