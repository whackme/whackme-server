const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// setInterval(function())

let insertUser = []


io.on('connection', function(socket) {
		socket.on('startGame', function () {
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

		})
		
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
	
			
		socket.on('insertUser', function (payload) {
		
		if(insertUser.length === 0) {
			let obj = {
				player: "playerOne",
				name: payload,
				sum: insertUser.length + 1
			}	
			insertUser.push(obj)
			socket.emit('insertUserToClient', insertUser)
		} else {
			let obj = {
				player: "playerTwo",
				name: payload,
				sum: insertUser.length + 1
			}
			insertUser.push(obj)
			socket.emit('insertUserToClient', insertUser)
			socket.broadcast.emit('updateSum', insertUser)
		}		
	})

	
})

server.listen(3000, () => {
	console.log(`Whackme listening on port ` + 3000);
})