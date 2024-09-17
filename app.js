const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;app.get('/', (req, res) => {
	res.redirect('https://github.com/Braedeng0/curl_parrot');
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
});


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});