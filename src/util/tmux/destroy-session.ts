import { execSync } from 'node:child_process';
import { printLineSeparator } from '../layout/line-separator.js';

export const tmuxDestroySession = (sessionName: string) => {
	printLineSeparator();

	console.log(`💥 Destroying session "${sessionName}"...`);
	execSync(`tmux kill-session -t ${sessionName}`);
	console.log(`✅ Session "${sessionName}" was destroyed`);
};
