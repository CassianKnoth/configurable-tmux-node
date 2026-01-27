import { execSync } from 'node:child_process';

import { Window } from '../../../types/config-types.js';
import { printLineSeparator } from '../../layout/line-separator.js';
import { createWindow } from './create-window.js';

export const tmuxStartSession = (
	sessionName: string,
	configuredWindows: Window[],
) => {
	printLineSeparator();

	const initialWindowName = 'default';

	console.log(`⏳ Creating new detached session "${sessionName}"...`);
	execSync(`tmux new -d -s ${sessionName} -n ${initialWindowName} -c "$(pwd)"`);
	console.log(`✅ Session "${sessionName}" was created`);

	configuredWindows.forEach((window, windowIndex) =>
		createWindow(window, windowIndex, sessionName),
	);
};
