import { ChoiceHandler } from '../../../../types/user-choice-types.js';
import { freshState } from '../../../state/fresh-state.js';
import { tmuxDestroySession } from '../../../tmux/destroy-session.js';

export const destroyHandler: ChoiceHandler = (currentContext) => {
	if (!currentContext) {
		throw new Error('Internal: No currentContext provided');
	}

	tmuxDestroySession(currentContext.sessionName);

	return freshState;
};
