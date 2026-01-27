import { execSync } from 'node:child_process';

/** Determines whether a given tmux session is running or not
 * @param sessionName Name of the tmux session
 */
export const hasTmuxSession = (sessionName: string): boolean => {
	try {
		execSync(`tmux has-session -t ${sessionName}`, { stdio: 'ignore' });
		return true;
	} catch {
		return false;
	}
};
