// server.js
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

const buildType = ( process.env.NODE_ENV == "production"  )? 'Production (If you want hot reloading, use command: npm run dev)' : 'Development';
const port = process.env.PORT || 3000;

// With express
const express = require("express");
app.prepare().then(() => {
	express()
		.use(handler)
		.listen(port, (err) => {
			if (err) {
				console.log("[SERVER START ERROR]", err);
			}
			console.log(`[LISTENING ON PORT ${port}]👍  live build: ${buildType}` );
		});
});
