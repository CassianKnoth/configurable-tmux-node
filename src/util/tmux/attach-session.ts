import { execFileSync } from 'node:child_process';
import { printLineSeparator } from '../layout/line-separator.js';

export const tmuxAttach = (sessionName: string) => {
	printLineSeparator();

	console.log(`📌 Attaching session "${sessionName}"`);

	execFileSync('tmux', ['attach', '-t', sessionName], {
		stdio: 'inherit',
	});
};
