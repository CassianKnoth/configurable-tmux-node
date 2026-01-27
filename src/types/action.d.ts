export type Action =
	| 'START_SESSION' // --> DETACHED_SESSION state
	| 'RESTART_SESSION' // --> DETACHED_SESSION state
	| 'DESTROY_SESSION' // --> NO_CONFIG state
	| 'ATTACH_SESSION' // --> leads to attach and exit
	| 'RETRY' // --> leads to same state (even necessary?)
	| 'EXIT';
