export type SessionState =
	| 'NO_CONFIG'
	| 'DETACHED_SESSION'
	| 'ATTACHED_SESSION'
	| 'EXIT';

export type Context = {
	sessionState: SessionState;
	sessionName: string;
};
