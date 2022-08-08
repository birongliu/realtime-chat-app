<<<<<<< HEAD:Website/src/components/socketio.tsx
import React, { createContext, PropsWithChildren } from 'react';
import { io, Socket } from 'socket.io-client';

const socket = io(`${process.env.NEXTAUTH_URL}:3001`, {
=======
import React, { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

const socket = io('http://192.168.0.14:3001', {
>>>>>>> dc48aca885499e5b74d3e2bb89859c7494e36cc7:Website/components/socketio.tsx
	withCredentials: true,
	extraHeaders: {
		'my-custom-header': 'abcd',
	},
});
const SocketContext = createContext<Socket>(socket);

socket.on('connect', () => {
	console.log('connected to socket');
});

setInterval(() => {
	const start = new Date().getMilliseconds();
	socket.emit('ping', () => {
		const end = new Date();
<<<<<<< HEAD:Website/src/components/socketio.tsx
		console.log(
			`${end.toTimeString().split(' ')[0]} [EVENT]: ping	-	${
				end.getMilliseconds() - start
			}ms`,
		);
	});
}, 10000);

const SocketProvider = ({ children }: PropsWithChildren) => {
=======
		console.log(`${end.toTimeString().split(' ')[0]} [EVENT]: ping	-	${end.getMilliseconds() - start}ms`);
	});
}, 10000);

const SocketProvider = ({ children }: any) => {
>>>>>>> dc48aca885499e5b74d3e2bb89859c7494e36cc7:Website/components/socketio.tsx
	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};
export { SocketContext, SocketProvider };
