const http = require('http');

const server = http.createServer((req, res) => {
    // Set default content type as HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.write(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to Home Page</h1>
                    <p>This is the home page.</p>
                    <a href="/about">About</a> |
                    <a href="/contact">Contact</a>
                </body>
            </html>
        `);
        res.end();

    } else if (req.url === '/about') {
        res.write(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>About Us</h1>
                    <p>This is the about page.</p>
                    <a href="/">Home</a>
                </body>
            </html>
        `);
        res.end();

    } else if (req.url === '/contact') {
        res.write(`
            <html>
                <head><title>Contact</title></head>
                <body>
                    <h1>Contact Us</h1>
                    <p>Email: example@email.com</p>
                    <a href="/">Home</a>
                </body>
            </html>
        `);
        res.end();

    } else {
        // Handle 404
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <head><title>404</title></head>
                <body>
                    <h1>404 - Page Not Found</h1>
                    <a href="/">Go Home</a>
                </body>
            </html>
        `);
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});