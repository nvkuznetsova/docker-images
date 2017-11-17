import http from 'http';
http.createServer(
	(req, res)=>res.end(`Hello, user ${Math.random()}!`)
).listen(3333);

