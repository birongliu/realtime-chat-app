import 'dotenv/config';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import * as http from 'http';
import compression from 'compression';
import session from 'express-session';
import MemoryStore from 'memorystore';
import { Server } from 'socket.io';
<<<<<<< HEAD
=======
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config({ path: `${process.cwd()}/.env` });

const io = new Server(server, {
	cors: {
		origin: process.env.NEXTAUTH_URL,
		methods: ['GET', 'POST'],
		allowedHeaders: ['my-custom-header'],
		credentials: true,
	},
});
>>>>>>> dc48aca885499e5b74d3e2bb89859c7494e36cc7
import route from './routes';

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server);

// Session handler
const Store = MemoryStore(session);
const sessionMiddleware = session({
	store:  new Store({ checkPeriod: 86400000 }),
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
});


// The server
app.use(express.static(__dirname))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(express.static('./src/public'))
	.use(compression())
	.use(cors({
		origin: process.env.NEXTAUTH_URL,
		methods: ['GET', 'POST'],
		credentials: true,
	}))
	.use(sessionMiddleware)
	.use('/api', route.route(io));

<<<<<<< HEAD
io.on('connection', (s) => {
	console.log(s);
});
=======
io
	/*
	.use((socket, next) => {
		// Wrap the express middleware
		// sessionMiddleware(socket.request, {}, next);
	})
	*/
	.on('connection', async (socket) => {

		// Show ping for client
		socket.on('ping', (callback) => {
			// socket.emit('messages', [{ id: Math.random(), text: 'boo', author: { user: 'ben' } }]);
			callback();
		});

		socket.on('hello', ({ roomName }) => {
			socket.join(roomName);
		});

		socket.on('disconnect', function() {
			console.log('User disconnected from WS');
		});
	});
>>>>>>> dc48aca885499e5b74d3e2bb89859c7494e36cc7

server.listen(process.env.port, () => {
	// tslint:disable-next-line:no-console
	console.log(`server started at http://localhost:${ process.env.port }`);
});
