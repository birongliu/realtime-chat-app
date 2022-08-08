import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../socketio';
import MessageCompoent from '../message';
type Message = {
	text: string;
	author: {
		username: string;
	};
};
interface Props {
	API: string;
	messages: Message[];
}

function Feed({ API, messages }: Props) {
	const socket = useContext(SocketContext);
	const [msg, setmsg] = useState([]);

	socket.on('messages', (message) => {
		console.log('messages', message);
		setmsg(message);
	});

	useEffect(() => {
		messages = msg;
	}, [msg]);

	async function handleInput(event: React.FormEvent<HTMLInputElement>) {
		console.log('boo');
		// If the user presses the "Enter" key on the keyboard
		// Send message
		await fetch(
			`${API}/api/channels/cl6jv5c8w0244zcuv6z2odxj3/messages`,
			{
				method: 'post',
				headers: {
					'content-type': 'application/json;charset=UTF-8',
				},
				body: JSON.stringify({
					message: event.currentTarget.value,
					code: '100',
				}),
			},
		);
		event.currentTarget.value = '';
	}

	return (
		<div className="text-channel">
			<MessageCompoent />
			<div className="text-input" style={{ whiteSpace: 'nowrap' }}>
				<svg width="24" height="24" viewBox="0 0 24 24" className="icon-upload">
					<path
						fill="currentColor"
						d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
					></path>
				</svg>
				<input
					type="text"
					placeholder="Message #{{CHANNEL.NAME}}"
					className="text-field"
					id="message"
					name="message"
					onChange={handleInput}
				></input>
				<button type="submit">Submit</button>
			</div>
		</div>
	);
}

export default Feed;
