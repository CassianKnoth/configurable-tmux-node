import { SessionState } from '../../types/state.js';
import { printLineSeparator } from '../layout/line-separator.js';
import { handleNoConfigState } from './handler/handle-no-config-state.js';

export const transition = async (
	currentState: SessionState,
): Promise<SessionState> => {
	printLineSeparator();
	console.log('transition from: ', currentState);

	switch (currentState) {
		case 'NO_CONFIG':
			const newState = await handleNoConfigState(currentState);
			return newState;
		case 'DETACHED_SESSION':
			console.log('Detached Session !!!');
			return 'EXIT';
		case 'ATTACHED_SESSION':
			console.log('Attached Session !!!');
			return 'EXIT';
		default:
			// TODO use exit handler
			return 'EXIT';
	}
};
