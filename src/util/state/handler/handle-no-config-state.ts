import { styleText } from 'node:util';
import { configuredSessions } from '../../../config.js';
import { SessionState } from '../../../types/state.js';
import { choices } from '../../user-input/choices.js';
import { getUserInput } from '../../user-input/get-user-input.js';
import { hasTmuxSession } from '../../tmux/has-session.js';
import { isTmuxAttached } from '../../tmux/is-attached.js';
import { tmuxStartSession } from '../../tmux/start/start-session.js';

export const handleNoConfigState = async (
	currentState: SessionState,
): Promise<SessionState> => {
	// get user input
	const userInput = await getUserInput(
		'🔑 Session-configuration key or [e]xit: ',
	);

	// handle exit
	// TODO remove .?-chain once testing is done
	if (choices.exit?.regex.test(userInput)) {
		const userInput = await getUserInput('Exit? [Y/n]: ');

		const confirmed = !/n$|no/i.test(userInput);

		const newState = confirmed ? choices.exit.handler() : currentState;
		return newState;
	}

	// handle other input
	console.log(`👀 Looking for session "${userInput}"...`);
	const configuration = configuredSessions[userInput];

	// - invalid input
	if (!configuration) {
		console.log(
			styleText('red', `❌ "${userInput}" is not a valid configuration`),
		);
		console.log(
			// double space due to emoji consisting of two characters
			styleText(
				'cyan',
				`➡️  Check for typos, create it and then try again, or choose another`,
			),
		);
		return 'NO_CONFIG';
	}

	const sessionName = userInput;
	console.log(
		// double space due to emoji consisting of two characters
		styleText('green', `⚙️  Found configuration for "${sessionName}"`),
	);

	console.log(`🔍 Checking status of "${sessionName}"...`);
	const hasSession = hasTmuxSession(sessionName);

	// - attached / detached
	if (hasSession) {
		console.log(
			styleText('yellow', `🏃 Session ${sessionName} is already running`),
		);

		const isAttached = isTmuxAttached(sessionName);

		if (isAttached) {
			// TODO return sessionName
			return 'ATTACHED_SESSION';
		} else {
			// TODO return sessionName
			return 'DETACHED_SESSION';
		}
	}

	// - start
	tmuxStartSession(sessionName, configuration);
	return 'DETACHED_SESSION';
};
