import { ChoiceHandler } from '../../../../types/user-choice-types.js';
import { tmuxDestroySession } from '../../../tmux/destroy-session.js';
import { tmuxStartSession } from '../../../tmux/start/start-session.js';

export const restartHandler: ChoiceHandler = (currentContext) => {
	if (!currentContext) {
		throw new Error('Internal: No currentContext provided');
	}

	const sessionName = currentContext.sessionName;

	// double space due to emoji consisting of two characters
	console.log(`🪃  Restarting session "${sessionName}"`);
	tmuxDestroySession(sessionName);
	tmuxStartSession(sessionName);

	return { ...currentContext, sessionState: 'DETACHED_SESSION' };
};
