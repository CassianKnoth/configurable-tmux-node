import { execSync } from 'node:child_process';
import { Window } from '../../../types/config-types.js';
import { printLineSeparator } from '../../layout/line-separator.js';
import { createPane } from './create-pane.js';

export const createWindow = (
	window: Window,
	windowIndex: number,
	sessionName: string,
) => {
	printLineSeparator();

	const windowName = `${sessionName}-${window.name}`;

	// double space due to emoji consisting of two characters
	console.log(`🏗️  Building "${windowName}"...`);

	// double space due to emoji consisting of two characters
	console.log(`⏳ 🖼️  Creating new Window "${windowName}"`);
	execSync(
		`tmux new-window -t ${sessionName}:${windowIndex + 1} -n ${windowName} -c ${window.workspacePath}`,
	);
	console.log(`✅ Window "${windowName}" was created`);

	const windowIdentifier = `${sessionName}:${windowName}`;
	const originPaneIdentifier = `${windowIdentifier}.0`;
	const originPaneName = 'origin';

	console.log(`⏳ 🧩 Creating new Pane "${originPaneName}"...`);
	execSync(`tmux select-pane -t ${originPaneIdentifier} -T ${originPaneName}`);
	console.log(`✅ Pane "${originPaneName}" was created`);

	if (window.additionalPanes) {
		printLineSeparator();

		// double space due to emoji consisting of two characters
		console.log(`🏗️  Building additional Panes...`);

		window.additionalPanes.forEach((pane, paneIndex) => {
			createPane(pane, paneIndex, windowIdentifier, window.workspacePath);
		});
	}
};
