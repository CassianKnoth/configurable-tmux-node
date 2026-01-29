import { execSync } from 'node:child_process';

/** Determines whether a given tmux session is attached or not
 * @param sessionName Name of the tmux session
 */
export const isTmuxAttached = (sessionName: string): boolean => {
	const attached = execSync(
		`tmux display-message -p -t ${sessionName} "#{session_attached}"`,
	)
		.toString()
		.trim();

	return attached === '1';

	// try {
	// 	execSync(
	// 		`tmux list-sessions -F "#{session_name} #{session_attached}" | awk -v name="${sessionName}" '$1 == name {print $2}'`,
	// 		{ stdio: 'ignore' },
	// 	);
	// 	return true;
	// } catch {
	// 	return false;
	// }
};
