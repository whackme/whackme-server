const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', function(socket) {
	console.log(`Socket.io client connected`);
	socket.emit('init', { message: 'Ini dari server' })
})

server.listen(3000, () => {
	console.log(`Whackme listening on port ` + 3000);
})