const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// setInterval(function())


io.on('connection', function(socket) {

	function randomX () {
		return Math.floor(Math.random()*7)
	}
	function randomY () {
		return Math.floor(Math.random()*7)
	}
	
	let position = {
		x: randomX(),
		y: randomY()
	}
	

	console.log(`Socket.io client connected`);
	io.emit('position', position)
	

	socket.on('changePosition', function () {
		function randomX () {
			return Math.floor(Math.random()*7)
		}
		function randomY () {
			return Math.floor(Math.random()*7)
		}
		
		let position = {
			x: randomX(),
			y: randomY()
		}

		io.emit('position', position)
	})
})

server.listen(3000, () => {
	console.log(`Whackme listening on port ` + 3000);
})