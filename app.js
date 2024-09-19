const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;

app.get('/', (req, res) => {
	res.redirect('https://github.com/Braedeng0/curl_parrot');
});

app.get('/help', (req, res) => {
	res.sendFile(__dirname + '/README.md');
});

function parrotRequest(parrot, req, res, notFound=false, returnName=false) {
    let filename = parrot;

	// Check if the file exists
	let paths = [
		`processed_gifs/parrots/${filename}.txt`,
		`processed_gifs/flags/${filename}.txt`,
		`processed_gifs/guests/${filename}.txt`
	];
	
	let file = null;
	for (let i = 0; i < paths.length; i ++) {
		if (fs.existsSync(paths[i])) {
			file = fs.readFileSync(paths[i], 'utf8');
			break;
		}
	}
	if (file == null) {
		parrotRequest('parrotnotfound', req, res, true);
		return;
	}

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    let frames = file.split('=====================');

	let max_num_lines = 0;
	for (let i = 0; i < frames.length; i++) {
		let lines = frames[i].split('\n');
		if (lines.length > max_num_lines) {
			max_num_lines = lines.length;
		}
	}

	// Add empty lines to the start of each frame to make them all the same length
	for (let i = 0; i < frames.length; i++) {
		let lines = frames[i].split('\n');
		let num_lines = lines.length;
		let num_empty_lines = max_num_lines - num_lines;
		for (let j = 0; j < num_empty_lines; j++) {
			lines.unshift('');
		}
		frames[i] = lines.join('\n');
	}

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
		if (notFound) {
			spacing = ' '.repeat(25);
			res.write(spacing);
			res.write('404 Parrot Not Found\n');
		}
		if (returnName) {
			spacing = ' '.repeat(25);
			res.write(spacing);
			res.write(`${filename}\n`);
		}
        res.write(frames[counter]);

        counter++;
        if (counter >= frames.length-1) {
            counter = 0;
        }
    }, frameDuration);

    req.on('close', () => {
        clearInterval(intervalId);
        if (!res.writableEnded) {
            res.write('\x1b[2J'); // Clear screen
            res.write('\u001b[?25h'); // Show cursor
            res.end();
        }
    });
}

app.get('/random', (req, res) => {
	let parrots = fs.readdirSync('processed_gifs/parrots');
	let randomParrot = parrots[Math.floor(Math.random() * parrots.length)].slice(0, -4);
	parrotRequest(randomParrot, req, res, false, true);
});

app.get('/randomflag', (req, res) => {
	let flags = fs.readdirSync('processed_gifs/flags');
	let randomFlag = flags[Math.floor(Math.random() * flags.length)].slice(0, -4);
	parrotRequest(randomFlag, req, res, false, true);
});

app.get('/randomguest', (req, res) => {
	let guests = fs.readdirSync('processed_gifs/guests');
	let randomGuest = guests[Math.floor(Math.random() * guests.length)].slice(0, -4);
	parrotRequest(randomGuest, req, res, false, true);
});

app.get('*', (req, res) => {
	// Get endpoint
	let endpoint = req.url.slice(1);
	parrotRequest(endpoint, req, res);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
