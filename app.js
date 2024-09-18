const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;app.get('/', (req, res) => {
	res.redirect('https://github.com/Braedeng0/curl_parrot');
});
app.get('/help', (req, res) => {
	res.sendFile(__dirname + '/README.md');
});
app.get('/balconyparrot', (req, res) => {
    let filename = "balconyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bulgariaparrot', (req, res) => {
    let filename = "bulgariaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partycage', (req, res) => {
    let filename = "partycage";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/jumpingparrot', (req, res) => {
    let filename = "jumpingparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/northmacedoniaparrot', (req, res) => {
    let filename = "northmacedoniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/singaporeparrot', (req, res) => {
    let filename = "singaporeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/vaccineparrot', (req, res) => {
    let filename = "vaccineparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sudanparrot', (req, res) => {
    let filename = "sudanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/gabonparrot', (req, res) => {
    let filename = "gabonparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/italyparrot', (req, res) => {
    let filename = "italyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hondurasparrot', (req, res) => {
    let filename = "hondurasparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/luxembourgparrot', (req, res) => {
    let filename = "luxembourgparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/stubparrot', (req, res) => {
    let filename = "stubparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/rwandaparrot', (req, res) => {
    let filename = "rwandaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/cameroonparrot', (req, res) => {
    let filename = "cameroonparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/surinameparrot', (req, res) => {
    let filename = "surinameparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/romaniaparrot', (req, res) => {
    let filename = "romaniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bahamasparrot', (req, res) => {
    let filename = "bahamasparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partytux', (req, res) => {
    let filename = "partytux";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/elsalvadorparrot', (req, res) => {
    let filename = "elsalvadorparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/vietnamparrot', (req, res) => {
    let filename = "vietnamparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/rythmicalparrot', (req, res) => {
    let filename = "rythmicalparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bluntparrot', (req, res) => {
    let filename = "bluntparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/flyingmoneyparrot', (req, res) => {
    let filename = "flyingmoneyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/cyprusparrot', (req, res) => {
    let filename = "cyprusparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/biparrot', (req, res) => {
    let filename = "biparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/palauparrot', (req, res) => {
    let filename = "palauparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/portalorangeparrot', (req, res) => {
    let filename = "portalorangeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hypnoparrotdark', (req, res) => {
    let filename = "hypnoparrotdark";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/vacationparrot', (req, res) => {
    let filename = "vacationparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/argentinaparrot', (req, res) => {
    let filename = "argentinaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bhutanparrot', (req, res) => {
    let filename = "bhutanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/gothparrot', (req, res) => {
    let filename = "gothparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/guatemalaparrot', (req, res) => {
    let filename = "guatemalaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/trinidadandtobagoparrot', (req, res) => {
    let filename = "trinidadandtobagoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/vikingparrot', (req, res) => {
    let filename = "vikingparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/dominicanrepublicparrot', (req, res) => {
    let filename = "dominicanrepublicparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/docparrot', (req, res) => {
    let filename = "docparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/boredparrot', (req, res) => {
    let filename = "boredparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/panamaparrot', (req, res) => {
    let filename = "panamaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/picassoparrot', (req, res) => {
    let filename = "picassoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/jumpingparrotjr', (req, res) => {
    let filename = "jumpingparrotjr";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/staytfhomeparrot', (req, res) => {
    let filename = "staytfhomeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/moroccoparrot', (req, res) => {
    let filename = "moroccoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/maliparrot', (req, res) => {
    let filename = "maliparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/pumpkinparrot', (req, res) => {
    let filename = "pumpkinparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/newzealandparrot', (req, res) => {
    let filename = "newzealandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/quadparrot', (req, res) => {
    let filename = "quadparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/kindasusparrot', (req, res) => {
    let filename = "kindasusparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/shuffleparrot', (req, res) => {
    let filename = "shuffleparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/cookislandsparrot', (req, res) => {
    let filename = "cookislandsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/gumiparrot', (req, res) => {
    let filename = "gumiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/angryparrot', (req, res) => {
    let filename = "angryparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/haitiparrot', (req, res) => {
    let filename = "haitiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/playcatchleftparrot', (req, res) => {
    let filename = "playcatchleftparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/marshallislandsparrot', (req, res) => {
    let filename = "marshallislandsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sithparrot', (req, res) => {
    let filename = "sithparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/frenchparrot', (req, res) => {
    let filename = "frenchparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/fastparrot', (req, res) => {
    let filename = "fastparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bootlegparrot', (req, res) => {
    let filename = "bootlegparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/papuanewguineaparrot', (req, res) => {
    let filename = "papuanewguineaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/austriaparrot', (req, res) => {
    let filename = "austriaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/togoparrot', (req, res) => {
    let filename = "togoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/batparrot', (req, res) => {
    let filename = "batparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/thisisfineparrot', (req, res) => {
    let filename = "thisisfineparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/philippinesparrot', (req, res) => {
    let filename = "philippinesparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/pokeparrot', (req, res) => {
    let filename = "pokeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/parrotpoop', (req, res) => {
    let filename = "parrotpoop";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/aussieparrot', (req, res) => {
    let filename = "aussieparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/levitationparrot', (req, res) => {
    let filename = "levitationparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/myanmarparrot', (req, res) => {
    let filename = "myanmarparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bosniaandherzegovinaparrot', (req, res) => {
    let filename = "bosniaandherzegovinaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/harpoparrot', (req, res) => {
    let filename = "harpoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/imposterparrot', (req, res) => {
    let filename = "imposterparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/croissantparrot', (req, res) => {
    let filename = "croissantparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tajikistanparrot', (req, res) => {
    let filename = "tajikistanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ukraineparrot', (req, res) => {
    let filename = "ukraineparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/guineaparrot', (req, res) => {
    let filename = "guineaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/congaparrot', (req, res) => {
    let filename = "congaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sahrawiarabdemocraticrepublicparrot', (req, res) => {
    let filename = "sahrawiarabdemocraticrepublicparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partygeeko', (req, res) => {
    let filename = "partygeeko";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sadparrot', (req, res) => {
    let filename = "sadparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/japanparrot', (req, res) => {
    let filename = "japanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partyparrot', (req, res) => {
    let filename = "partyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/latviaparrot', (req, res) => {
    let filename = "latviaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/daftpunkparrot', (req, res) => {
    let filename = "daftpunkparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/boomparrot', (req, res) => {
    let filename = "boomparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/lebanonparrot', (req, res) => {
    let filename = "lebanonparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sanmarinoparrot', (req, res) => {
    let filename = "sanmarinoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/redenvelopeparrot', (req, res) => {
    let filename = "redenvelopeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/indonesiaparrot', (req, res) => {
    let filename = "indonesiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sloveniaparrot', (req, res) => {
    let filename = "sloveniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partyfieri', (req, res) => {
    let filename = "partyfieri";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/southkoreaparrot', (req, res) => {
    let filename = "southkoreaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/astronautparrot', (req, res) => {
    let filename = "astronautparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/turkeyparrot', (req, res) => {
    let filename = "turkeyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/belarusparrot', (req, res) => {
    let filename = "belarusparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/samoaparrot', (req, res) => {
    let filename = "samoaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/originalparrot', (req, res) => {
    let filename = "originalparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/scienceparrot', (req, res) => {
    let filename = "scienceparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/afghanistanparrot', (req, res) => {
    let filename = "afghanistanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/saintluciaparrot', (req, res) => {
    let filename = "saintluciaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/horizontalparrot', (req, res) => {
    let filename = "horizontalparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/vueparrot', (req, res) => {
    let filename = "vueparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/abkhaziaparrot', (req, res) => {
    let filename = "abkhaziaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/estoniaparrot', (req, res) => {
    let filename = "estoniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/party-k8s', (req, res) => {
    let filename = "party-k8s";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/innersourceparrot', (req, res) => {
    let filename = "innersourceparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/icelandparrot', (req, res) => {
    let filename = "icelandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/pakistanparrot', (req, res) => {
    let filename = "pakistanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/opensourceparrot', (req, res) => {
    let filename = "opensourceparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/saudiarabiaparrot', (req, res) => {
    let filename = "saudiarabiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/nigerparrot', (req, res) => {
    let filename = "nigerparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/guyanaparrot', (req, res) => {
    let filename = "guyanaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/maskparrot', (req, res) => {
    let filename = "maskparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sintparrot', (req, res) => {
    let filename = "sintparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/fijiparrot', (req, res) => {
    let filename = "fijiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sierraleoneparrot', (req, res) => {
    let filename = "sierraleoneparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/northerncyprusparrot', (req, res) => {
    let filename = "northerncyprusparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ceilingparrot', (req, res) => {
    let filename = "ceilingparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/headbangingparrot', (req, res) => {
    let filename = "headbangingparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partygopher', (req, res) => {
    let filename = "partygopher";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/vanuatuparrot', (req, res) => {
    let filename = "vanuatuparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/middleparrot', (req, res) => {
    let filename = "middleparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/guineabissauparrot', (req, res) => {
    let filename = "guineabissauparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/switzerlandparrot', (req, res) => {
    let filename = "switzerlandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/malaysiaparrot', (req, res) => {
    let filename = "malaysiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/maltaparrot', (req, res) => {
    let filename = "maltaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/uruguayparrot', (req, res) => {
    let filename = "uruguayparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/nodeparrot', (req, res) => {
    let filename = "nodeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tuvaluparrot', (req, res) => {
    let filename = "tuvaluparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hanamiparrot', (req, res) => {
    let filename = "hanamiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/israelparrot', (req, res) => {
    let filename = "israelparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/checkeredflagparrot', (req, res) => {
    let filename = "checkeredflagparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mongoliaparrot', (req, res) => {
    let filename = "mongoliaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/stayhomeparrotwindow', (req, res) => {
    let filename = "stayhomeparrotwindow";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/westernsaharaparrot', (req, res) => {
    let filename = "westernsaharaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/raceconditionparrot', (req, res) => {
    let filename = "raceconditionparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/gentlemanparrot', (req, res) => {
    let filename = "gentlemanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/zambiaparrot', (req, res) => {
    let filename = "zambiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tanzaniaparrot', (req, res) => {
    let filename = "tanzaniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/egyptparrot', (req, res) => {
    let filename = "egyptparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/laosparrot', (req, res) => {
    let filename = "laosparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sherlockholmesparrot', (req, res) => {
    let filename = "sherlockholmesparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sushiparrot', (req, res) => {
    let filename = "sushiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tiedyeparrot', (req, res) => {
    let filename = "tiedyeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/cryingjordanparrot', (req, res) => {
    let filename = "cryingjordanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ecuadorparrot', (req, res) => {
    let filename = "ecuadorparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/easttimorparrot', (req, res) => {
    let filename = "easttimorparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/chinaparrot', (req, res) => {
    let filename = "chinaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sleepingparrot', (req, res) => {
    let filename = "sleepingparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/unitedkingdomparrot', (req, res) => {
    let filename = "unitedkingdomparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/lithuaniaparrot', (req, res) => {
    let filename = "lithuaniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/nyanparrot', (req, res) => {
    let filename = "nyanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/dealwithitparrot', (req, res) => {
    let filename = "dealwithitparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/armeniaparrot', (req, res) => {
    let filename = "armeniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/redbullparrot', (req, res) => {
    let filename = "redbullparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bruneiparrot', (req, res) => {
    let filename = "bruneiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/cambodiaparrot', (req, res) => {
    let filename = "cambodiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partysloth', (req, res) => {
    let filename = "partysloth";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/niueparrot', (req, res) => {
    let filename = "niueparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/reverseportalblueparrot', (req, res) => {
    let filename = "reverseportalblueparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/headsetparrot', (req, res) => {
    let filename = "headsetparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/southafricaparrot', (req, res) => {
    let filename = "southafricaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mergeimmediatelyparrot', (req, res) => {
    let filename = "mergeimmediatelyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/saintkittsandnevisparrot', (req, res) => {
    let filename = "saintkittsandnevisparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/laptop_parrot', (req, res) => {
    let filename = "laptop_parrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/liechtensteinparrot', (req, res) => {
    let filename = "liechtensteinparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/exceptionallyfastparrot', (req, res) => {
    let filename = "exceptionallyfastparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/transnistriaparrot', (req, res) => {
    let filename = "transnistriaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mergetrainparrot', (req, res) => {
    let filename = "mergetrainparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/northern-ireland-ulster-banner', (req, res) => {
    let filename = "northern-ireland-ulster-banner";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/brazilianfanparrot', (req, res) => {
    let filename = "brazilianfanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/beerparrot', (req, res) => {
    let filename = "beerparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mauritaniaparrot', (req, res) => {
    let filename = "mauritaniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/wendyparrot', (req, res) => {
    let filename = "wendyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/malawiparrot', (req, res) => {
    let filename = "malawiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/northkoreaparrot', (req, res) => {
    let filename = "northkoreaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/wineparrot', (req, res) => {
    let filename = "wineparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/quebecparrot', (req, res) => {
    let filename = "quebecparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/azerbaijanparrot', (req, res) => {
    let filename = "azerbaijanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/fasttwinsparrot', (req, res) => {
    let filename = "fasttwinsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partyblobcat', (req, res) => {
    let filename = "partyblobcat";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/russiaparrot', (req, res) => {
    let filename = "russiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/montenegroparrot', (req, res) => {
    let filename = "montenegroparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/nepalparrot', (req, res) => {
    let filename = "nepalparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/backwardsparrot', (req, res) => {
    let filename = "backwardsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/serbiaparrot', (req, res) => {
    let filename = "serbiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/thailandparrot', (req, res) => {
    let filename = "thailandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/aussiereversecongaparrot', (req, res) => {
    let filename = "aussiereversecongaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/yosemitesamparrot', (req, res) => {
    let filename = "yosemitesamparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bugparrot', (req, res) => {
    let filename = "bugparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/slowparrot', (req, res) => {
    let filename = "slowparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bobaparrot', (req, res) => {
    let filename = "bobaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/turkmenistanparrot', (req, res) => {
    let filename = "turkmenistanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/confusedparrot', (req, res) => {
    let filename = "confusedparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/footballparrot', (req, res) => {
    let filename = "footballparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/jamaicaparrot', (req, res) => {
    let filename = "jamaicaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/congapartyparrot', (req, res) => {
    let filename = "congapartyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/party-wizard', (req, res) => {
    let filename = "party-wizard";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/coffeeparrot', (req, res) => {
    let filename = "coffeeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/accessibleparrot', (req, res) => {
    let filename = "accessibleparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partywumpus', (req, res) => {
    let filename = "partywumpus";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/wales', (req, res) => {
    let filename = "wales";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/australiaparrot', (req, res) => {
    let filename = "australiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/portalblueparrot', (req, res) => {
    let filename = "portalblueparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ivorycoastparrot', (req, res) => {
    let filename = "ivorycoastparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/canadaparrot', (req, res) => {
    let filename = "canadaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/discoduck', (req, res) => {
    let filename = "discoduck";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/braveheartparrot', (req, res) => {
    let filename = "braveheartparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/germanyparrot', (req, res) => {
    let filename = "germanyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/czechrepublicparrot', (req, res) => {
    let filename = "czechrepublicparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/paraguayparrot', (req, res) => {
    let filename = "paraguayparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/qatarparrot', (req, res) => {
    let filename = "qatarparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/jordanparrot', (req, res) => {
    let filename = "jordanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/maracasparrot', (req, res) => {
    let filename = "maracasparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/trollparrot', (req, res) => {
    let filename = "trollparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/yemenparrot', (req, res) => {
    let filename = "yemenparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/temporaltableparrot', (req, res) => {
    let filename = "temporaltableparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/moonparrot', (req, res) => {
    let filename = "moonparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/freebelarusparrot', (req, res) => {
    let filename = "freebelarusparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/taiwanparrot', (req, res) => {
    let filename = "taiwanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/boliviaparrot', (req, res) => {
    let filename = "boliviaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/norwegianblueparrot', (req, res) => {
    let filename = "norwegianblueparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/capsparrot', (req, res) => {
    let filename = "capsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tinfoilhatparrot', (req, res) => {
    let filename = "tinfoilhatparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/cubaparrot', (req, res) => {
    let filename = "cubaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/christmasparrot', (req, res) => {
    let filename = "christmasparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/covid19parrot', (req, res) => {
    let filename = "covid19parrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tpparrot', (req, res) => {
    let filename = "tpparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/kosovoparrot', (req, res) => {
    let filename = "kosovoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/srilankaparrot', (req, res) => {
    let filename = "srilankaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/popcornparrot', (req, res) => {
    let filename = "popcornparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/liberiaparrot', (req, res) => {
    let filename = "liberiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mozambiqueparrot', (req, res) => {
    let filename = "mozambiqueparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/parrot', (req, res) => {
    let filename = "parrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/kyrgyzstanparrot', (req, res) => {
    let filename = "kyrgyzstanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/wfhparrot', (req, res) => {
    let filename = "wfhparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/illuminatiparrot', (req, res) => {
    let filename = "illuminatiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/iranparrot', (req, res) => {
    let filename = "iranparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/reverseportalorangeparrot', (req, res) => {
    let filename = "reverseportalorangeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/norwayparrot', (req, res) => {
    let filename = "norwayparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/beretparrot', (req, res) => {
    let filename = "beretparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/meldparrot', (req, res) => {
    let filename = "meldparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/cakeparrot', (req, res) => {
    let filename = "cakeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partyannoyedbird', (req, res) => {
    let filename = "partyannoyedbird";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/dadparrot', (req, res) => {
    let filename = "dadparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/monacoparrot', (req, res) => {
    let filename = "monacoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/headingparrot', (req, res) => {
    let filename = "headingparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/polandparrot', (req, res) => {
    let filename = "polandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/zoukparrot', (req, res) => {
    let filename = "zoukparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/spyparrot', (req, res) => {
    let filename = "spyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/gambiaparrot', (req, res) => {
    let filename = "gambiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/nicaraguaparrot', (req, res) => {
    let filename = "nicaraguaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/dominicaparrot', (req, res) => {
    let filename = "dominicaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sneezyparrot', (req, res) => {
    let filename = "sneezyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/birthdaypartyparrot', (req, res) => {
    let filename = "birthdaypartyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/lesothoparrot', (req, res) => {
    let filename = "lesothoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/stayhomeparrotcloser', (req, res) => {
    let filename = "stayhomeparrotcloser";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partygfm', (req, res) => {
    let filename = "partygfm";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/albaniaparrot', (req, res) => {
    let filename = "albaniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/everythingsfineparrot', (req, res) => {
    let filename = "everythingsfineparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/reactparrot', (req, res) => {
    let filename = "reactparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/revolutionparrot', (req, res) => {
    let filename = "revolutionparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/dailyparrot', (req, res) => {
    let filename = "dailyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ultrafastparrot', (req, res) => {
    let filename = "ultrafastparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/somalilandparrot', (req, res) => {
    let filename = "somalilandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/antiguaandbarbudaparrot', (req, res) => {
    let filename = "antiguaandbarbudaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partyblob', (req, res) => {
    let filename = "partyblob";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/zimbabweparrot', (req, res) => {
    let filename = "zimbabweparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/djiboutiparrot', (req, res) => {
    let filename = "djiboutiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/soccerparrot', (req, res) => {
    let filename = "soccerparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/dealwithitnowparrot', (req, res) => {
    let filename = "dealwithitnowparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/southsudanparrot', (req, res) => {
    let filename = "southsudanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mergeconflictparrot', (req, res) => {
    let filename = "mergeconflictparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/burkinafasoparrot', (req, res) => {
    let filename = "burkinafasoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mateparrot', (req, res) => {
    let filename = "mateparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/chicoparrot', (req, res) => {
    let filename = "chicoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/kazakhstanparrot', (req, res) => {
    let filename = "kazakhstanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/calvinist_parrot', (req, res) => {
    let filename = "calvinist_parrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/aussiecongaparrot', (req, res) => {
    let filename = "aussiecongaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/brazilparrot', (req, res) => {
    let filename = "brazilparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/greekmacedoniaparrot', (req, res) => {
    let filename = "greekmacedoniaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/angelparrot', (req, res) => {
    let filename = "angelparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partypicard', (req, res) => {
    let filename = "partypicard";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/deletedparrot', (req, res) => {
    let filename = "deletedparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/costaricaparrot', (req, res) => {
    let filename = "costaricaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/glimpseparrot', (req, res) => {
    let filename = "glimpseparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/reverseparrot', (req, res) => {
    let filename = "reverseparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/scotland', (req, res) => {
    let filename = "scotland";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/zombieparrot', (req, res) => {
    let filename = "zombieparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/chefparrot', (req, res) => {
    let filename = "chefparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/uzbekistanparrot', (req, res) => {
    let filename = "uzbekistanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/unitedstatesofamericaparrot', (req, res) => {
    let filename = "unitedstatesofamericaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hackerparrot', (req, res) => {
    let filename = "hackerparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/belizeparrot', (req, res) => {
    let filename = "belizeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hmmparrot', (req, res) => {
    let filename = "hmmparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/irelandparrot', (req, res) => {
    let filename = "irelandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/omanparrot', (req, res) => {
    let filename = "omanparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/barbadosparrot', (req, res) => {
    let filename = "barbadosparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/pingpongparrot', (req, res) => {
    let filename = "pingpongparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/invisibleparrot', (req, res) => {
    let filename = "invisibleparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/stableparrot', (req, res) => {
    let filename = "stableparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/prideparrot', (req, res) => {
    let filename = "prideparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bunnyparrot', (req, res) => {
    let filename = "bunnyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/old-man-yells-at-parrot', (req, res) => {
    let filename = "old-man-yells-at-parrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/transparrot', (req, res) => {
    let filename = "transparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hungaryparrot', (req, res) => {
    let filename = "hungaryparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/somaliaparrot', (req, res) => {
    let filename = "somaliaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/eritreaparrot', (req, res) => {
    let filename = "eritreaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/transparront', (req, res) => {
    let filename = "transparront";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/kuwaitparrot', (req, res) => {
    let filename = "kuwaitparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/donutparrot', (req, res) => {
    let filename = "donutparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/marshmallowparrot', (req, res) => {
    let filename = "marshmallowparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/thankyouparrot', (req, res) => {
    let filename = "thankyouparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/shortparrot', (req, res) => {
    let filename = "shortparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/falklandislandsparrot', (req, res) => {
    let filename = "falklandislandsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/belgiumparrot', (req, res) => {
    let filename = "belgiumparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/nigeriaparrot', (req, res) => {
    let filename = "nigeriaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/inverseparrot', (req, res) => {
    let filename = "inverseparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/swedenparrot', (req, res) => {
    let filename = "swedenparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/denmarkparrot', (req, res) => {
    let filename = "denmarkparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partykeanu', (req, res) => {
    let filename = "partykeanu";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/botswanaparrot', (req, res) => {
    let filename = "botswanaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/croatiaparrot', (req, res) => {
    let filename = "croatiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/maldivesparrot', (req, res) => {
    let filename = "maldivesparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/reversecongaparrot', (req, res) => {
    let filename = "reversecongaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/madagascarparrot', (req, res) => {
    let filename = "madagascarparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/equatorialguineaparrot', (req, res) => {
    let filename = "equatorialguineaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bahrainparrot', (req, res) => {
    let filename = "bahrainparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/jediparrot', (req, res) => {
    let filename = "jediparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/discoparrot', (req, res) => {
    let filename = "discoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partygritty', (req, res) => {
    let filename = "partygritty";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/grenadaparrot', (req, res) => {
    let filename = "grenadaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/michaeljacksonparrot', (req, res) => {
    let filename = "michaeljacksonparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/netherlandsparrot', (req, res) => {
    let filename = "netherlandsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/redhatparrot', (req, res) => {
    let filename = "redhatparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/micronesiaparrot', (req, res) => {
    let filename = "micronesiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/chileparrot', (req, res) => {
    let filename = "chileparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/libyaparrot', (req, res) => {
    let filename = "libyaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/chadparrot', (req, res) => {
    let filename = "chadparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/pirateparrot', (req, res) => {
    let filename = "pirateparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/resonatingredparrot', (req, res) => {
    let filename = "resonatingredparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/stayhomeparrot', (req, res) => {
    let filename = "stayhomeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/chefkissparrot', (req, res) => {
    let filename = "chefkissparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/republicofthecongoparrot', (req, res) => {
    let filename = "republicofthecongoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/grouchoparrot', (req, res) => {
    let filename = "grouchoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mustacheparrot', (req, res) => {
    let filename = "mustacheparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/northern-ireland-st-patricks-saltire', (req, res) => {
    let filename = "northern-ireland-st-patricks-saltire";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bikerparrot', (req, res) => {
    let filename = "bikerparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/finlandparrot', (req, res) => {
    let filename = "finlandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hypnoparrotlight', (req, res) => {
    let filename = "hypnoparrotlight";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/darkmodeparrot', (req, res) => {
    let filename = "darkmodeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/franceparrot', (req, res) => {
    let filename = "franceparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/copparrot', (req, res) => {
    let filename = "copparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/rubyparrot', (req, res) => {
    let filename = "rubyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/euparrot', (req, res) => {
    let filename = "euparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/blurryparrot', (req, res) => {
    let filename = "blurryparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/whitewalkerparrot', (req, res) => {
    let filename = "whitewalkerparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/senegalparrot', (req, res) => {
    let filename = "senegalparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/kiribatiparrot', (req, res) => {
    let filename = "kiribatiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/thumbsupparrot', (req, res) => {
    let filename = "thumbsupparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/turndownforwatchparrot', (req, res) => {
    let filename = "turndownforwatchparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/puertoricoparrot', (req, res) => {
    let filename = "puertoricoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/badparrot', (req, res) => {
    let filename = "badparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bangladeshparrot', (req, res) => {
    let filename = "bangladeshparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/england', (req, res) => {
    let filename = "england";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partyfsjal', (req, res) => {
    let filename = "partyfsjal";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/capeverdeparrot', (req, res) => {
    let filename = "capeverdeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/venezuelaparrot', (req, res) => {
    let filename = "venezuelaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/vibepartycat', (req, res) => {
    let filename = "vibepartycat";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/peruparrot', (req, res) => {
    let filename = "peruparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/parrotnotfound', (req, res) => {
    let filename = "parrotnotfound";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/beninparrot', (req, res) => {
    let filename = "beninparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ethiopiaparrot', (req, res) => {
    let filename = "ethiopiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/algeriaparrot', (req, res) => {
    let filename = "algeriaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/witnessprotectionparrot', (req, res) => {
    let filename = "witnessprotectionparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/andorraparrot', (req, res) => {
    let filename = "andorraparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/unitedarabemiratesparrot', (req, res) => {
    let filename = "unitedarabemiratesparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/dogeparrot', (req, res) => {
    let filename = "dogeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/slovakiaparrot', (req, res) => {
    let filename = "slovakiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/nauruparrot', (req, res) => {
    let filename = "nauruparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/saotomeandprincipeparrot', (req, res) => {
    let filename = "saotomeandprincipeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hongkongparrot', (req, res) => {
    let filename = "hongkongparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/namibiaparrot', (req, res) => {
    let filename = "namibiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/solomonislandsparrot', (req, res) => {
    let filename = "solomonislandsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/60fpsparrot', (req, res) => {
    let filename = "60fpsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sassyparrot', (req, res) => {
    let filename = "sassyparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/thefastestparrot', (req, res) => {
    let filename = "thefastestparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hardhatparrot', (req, res) => {
    let filename = "hardhatparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/preetjusticeparrot', (req, res) => {
    let filename = "preetjusticeparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/partymoogle', (req, res) => {
    let filename = "partymoogle";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/saintvincentandthegrenadinesparrot', (req, res) => {
    let filename = "saintvincentandthegrenadinesparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/burundiparrot', (req, res) => {
    let filename = "burundiparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/portugalparrot', (req, res) => {
    let filename = "portugalparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/indiaparrot', (req, res) => {
    let filename = "indiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tongaparrot', (req, res) => {
    let filename = "tongaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/artsakhparrot', (req, res) => {
    let filename = "artsakhparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/greeceparrot', (req, res) => {
    let filename = "greeceparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/flowerparrot', (req, res) => {
    let filename = "flowerparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/twinsparrot', (req, res) => {
    let filename = "twinsparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/spinningparrot', (req, res) => {
    let filename = "spinningparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tunisiaparrot', (req, res) => {
    let filename = "tunisiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ugandaparrot', (req, res) => {
    let filename = "ugandaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/eswatiniparrot', (req, res) => {
    let filename = "eswatiniparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/seychellesparrot', (req, res) => {
    let filename = "seychellesparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/macauparrot', (req, res) => {
    let filename = "macauparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/comorosparrot', (req, res) => {
    let filename = "comorosparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/tennisparrot', (req, res) => {
    let filename = "tennisparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mauritiusparrot', (req, res) => {
    let filename = "mauritiusparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/angolaparrot', (req, res) => {
    let filename = "angolaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/greenlandparrot', (req, res) => {
    let filename = "greenlandparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/brazilianplayerparrot', (req, res) => {
    let filename = "brazilianplayerparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/democraticrepublicofthecongoparrot', (req, res) => {
    let filename = "democraticrepublicofthecongoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/sidewaysparrot', (req, res) => {
    let filename = "sidewaysparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/moldovaparrot', (req, res) => {
    let filename = "moldovaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/bouncingparrot', (req, res) => {
    let filename = "bouncingparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ghanaparrot', (req, res) => {
    let filename = "ghanaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/ripparrot', (req, res) => {
    let filename = "ripparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/antarcticaparrot', (req, res) => {
    let filename = "antarcticaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mardigrasparrot', (req, res) => {
    let filename = "mardigrasparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/mexicoparrot', (req, res) => {
    let filename = "mexicoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/centralafricanrepublicparrot', (req, res) => {
    let filename = "centralafricanrepublicparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/syriaparrot', (req, res) => {
    let filename = "syriaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/southossetiaparrot', (req, res) => {
    let filename = "southossetiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/iraqparrot', (req, res) => {
    let filename = "iraqparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/evilparrot', (req, res) => {
    let filename = "evilparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/georgiaparrot', (req, res) => {
    let filename = "georgiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/phparrot', (req, res) => {
    let filename = "phparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/vaticancityparrot', (req, res) => {
    let filename = "vaticancityparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/spainparrot', (req, res) => {
    let filename = "spainparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/githubparrot', (req, res) => {
    let filename = "githubparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/kenyaparrot', (req, res) => {
    let filename = "kenyaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/unicornparrot', (req, res) => {
    let filename = "unicornparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/playcatchrightparrot', (req, res) => {
    let filename = "playcatchrightparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/hypnoparrot', (req, res) => {
    let filename = "hypnoparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/palestineparrot', (req, res) => {
    let filename = "palestineparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/verticalparrot', (req, res) => {
    let filename = "verticalparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/colombiaparrot', (req, res) => {
    let filename = "colombiaparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/moonwalkingparrot', (req, res) => {
    let filename = "moonwalkingparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});
app.get('/autonomousparrot', (req, res) => {
    let filename = "autonomousparrot";

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
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
});app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});