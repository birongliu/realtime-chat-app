<<<<<<< HEAD:Website/src/components/message.tsx
import {
	DiscordMessages,
	DiscordMention,
	DiscordMessage,
} from '@danktuary/react-discord-message';
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from './socketio';

type Post = {
	text: string;
	author: {
		username: string;
	};
};

function message() {
=======
import { DiscordMessages, DiscordMention, DiscordMessage } from '@danktuary/react-discord-message';
import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from './socketio';

interface Props {
  msg: Array<any>
}

type Post = {
  text: string
  author: {
    username: string
  }
}

function message({ msg: messages }: Props) {
>>>>>>> dc48aca885499e5b74d3e2bb89859c7494e36cc7:Website/components/message.tsx
	const [posts, setPosts] = useState<Post[]>([]);
	const socket = useContext(SocketContext);

	useEffect(() => {
		socket.on('messages', (m: Post[]) => {
<<<<<<< HEAD:Website/src/components/message.tsx
			setPosts((p) => [...p, ...m]);
=======
			setPosts(p => [...p, ...m]);
>>>>>>> dc48aca885499e5b74d3e2bb89859c7494e36cc7:Website/components/message.tsx
		});
	}, [posts, setPosts]);

	return (
<<<<<<< HEAD:Website/src/components/message.tsx
		<DiscordMessages className={{ height: '85vh' }}>
			<div id="messages">
				{posts
					.filter((p) => p.text)
					.map((msg, index) => (
						<DiscordMessage
							author={msg.author.username}
							avatar="red"
							key={index}
						>
							{msg.text} <DiscordMention> Boo </DiscordMention>
						</DiscordMessage>
					))}
			</div>
		</DiscordMessages>
=======
		<DiscordMessages className={{ 'height': '85vh' }}>
			<div id="messages">
				{posts.filter(p => p.text).map((msg, index) => (
					<DiscordMessage author={msg.author.username} avatar="red" key={index}>
						{msg.text} <DiscordMention> Boo </DiscordMention>
					</DiscordMessage>
				))}
			</div>
		</DiscordMessages>

>>>>>>> dc48aca885499e5b74d3e2bb89859c7494e36cc7:Website/components/message.tsx
	);
}

export default message;
