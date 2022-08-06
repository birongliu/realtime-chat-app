import type { Guild } from '../../types/datatypes';

interface Props {
	guild: Guild
}

function Feed({ guild }: Props) {
	console.log('data', guild);
	return (
		<div className="channel-selector">
		// Get all categories and chanels with no parentId
		// Place them first and then fill categories in with their children
			{guild.channels.filter(c => c.children.length >= 1).map(i => {
				switch (i.type) {
					case 'TEXT':
						return (
							<div className="iconVisibility-vptxma wrapper-NhbLHG">
								<div className="content-1gYQeQ">
									<a href={`/${guild.id}/${i.id}`} role="link" className="mainContent-20q_Hp" data-list-item-id="channels___750760218505248807" aria-label="📸pic-n-memes (text channel)">
										<div aria-label="Text (Limited)" role="img" className="iconContainer-21RCa3">
											<svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg">
												<path fill="currentColor" d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z"></path>
												<path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"></path></svg></div><div className="name-28HaxV overflow-1wOqNV" aria-hidden="true">
											<div className="channelName-3KPsGw">{i.name}</div>
										</div>
									</a>
									<div className="children-1MGS9G"><div className="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" role="button">
										<svg className="actionIcon-2sw4Sl" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
											<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
											<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
											<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
										</svg>
									</div>
									<div className="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Edit Channel" role="button">
										<svg className="actionIcon-2sw4Sl" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
											<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
										</svg>
									</div>
									<div className="channelInfo-3jN1ay"></div>
									</div>
								</div>
							</div>
						);
					case 'VOICE':
						return (
							<div className="iconVisibility-vptxma wrapper-NhbLHG">
								<div className="content-1gYQeQ">
									<a role="button" className="mainContent-20q_Hp" data-list-item-id="channels___802319663492104253" tabindex="-1" aria-label="🔊Chatroom 1 (voice channel), 0 of 99 users">
										<div aria-label="Voice (Limited)" role="img" className="iconContainer-21RCa3">
											<svg width="24" height="24" viewBox="0 0 24 24" className="icon-2W8DHg">
												<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15 12C15 12.0007 15 12.0013 15 12.002C15 12.553 14.551 13.002 14 13.002V15.002C15.654 15.002 17 13.657 17 12.002C17 12.0013 17 12.0007 17 12H15ZM19 12C19 12.0007 19 12.0013 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 12.0013 21 12.0007 21 12H19ZM10.293 3.29604C10.579 3.01004 11.009 2.92504 11.383 3.07904C11.757 3.23204 12 3.59904 12 4.00204V20.002C12 20.407 11.757 20.772 11.383 20.927C11.009 21.082 10.579 20.996 10.293 20.71L6 16.002H3C2.45 16.002 2 15.552 2 15.002V9.00204C2 8.45304 2.45 8.00204 3 8.00204H6L10.293 3.29604Z"></path>
												<path fill="currentColor" d="M21.025 5V4C21.025 2.88 20.05 2 19 2C17.95 2 17 2.88 17 4V5C16.4477 5 16 5.44772 16 6V9C16 9.55228 16.4477 10 17 10H19H21C21.5523 10 22 9.55228 22 9V5.975C22 5.43652 21.5635 5 21.025 5ZM20 5H18V4C18 3.42857 18.4667 3 19 3C19.5333 3 20 3.42857 20 4V5Z"></path>
											</svg>
										</div>
										<div className="name-28HaxV overflow-1wOqNV" aria-hidden="true">
											<div className="channelName-3KPsGw">🔊Chatroom 1</div>
										</div>
									</a>
									<div className="children-1MGS9G">
										<div className="iconItem-1EjiK0 iconBase-2G48Fc openChatIconItem-2kj5qO" aria-label="Open Chat" role="button" >
											<svg className="actionIcon-2sw4Sl" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24" fill="none">
												<path fill="currentColor" d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"></path>
											</svg>
										</div>
										<div className="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Create Invite" role="button">
											<svg className="actionIcon-2sw4Sl" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
												<path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path>
												<path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path>
												<path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"></path>
											</svg>
										</div>
										<div className="iconItem-1EjiK0 iconBase-2G48Fc" aria-label="Edit Channel" role="button">
											<svg className="actionIcon-2sw4Sl" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
												<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"></path>
											</svg>
										</div>
										<div className="channelInfo-3jN1ay">
											<div className="wrapper-2fEmwW"><span className="users-2JoyGL">00</span><span className="total-1c5KCN">99</span></div>
										</div>
									</div>
								</div>
							</div>
						);
					default:
						return (
							<p>Cateory</p>
						);
				}


			})}
		</div>
	);
}

export default Feed;
