const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${req.method} ${req.url}`);

  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Node.js Webserver</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            h1 { color: #2d3748; }
            .info { background: #f7fafc; padding: 15px; border-radius: 8px; }
          </style>
        </head>
        <body>
          <h1>Node.js Webserver läuft!</h1>
          <div class="info">
            <p><strong>Timestamp:</strong> ${timestamp}</p>
            <p><strong>Node Version:</strong> ${process.version}</p>
            <p><strong>Platform:</strong> ${process.platform}</p>
          </div>
        </body>
      </html>
    `);
  } else if (req.url === '/api/status') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'online',
      timestamp: timestamp,
      nodeVersion: process.version,
      uptime: process.uptime()
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Nicht gefunden');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server gestartet auf http://0.0.0.0:${PORT}`);
  console.log('Drücke Ctrl+C zum Beenden');
});
