import { styleText } from 'node:util';
import { SessionState } from '../../types/state.js';
import { listConfigurations } from '../list-configuration.js';

export const renderState = async (currentState: SessionState) => {
	console.log('renderState: ', currentState);

	switch (currentState) {
		case 'NO_CONFIG':
			console.log(
				styleText(
					'yellow',
					// double space due to emoji consisting of two characters
					'⚠️  Please provide a valid session-configuration key to start or interact with a session',
				),
			);
			listConfigurations();
			break;
		case 'DETACHED_SESSION':
			console.log('Detached Session !!!');
			break;
		case 'ATTACHED_SESSION':
			console.log('Attached Session !!!');
			break;
	}
};
