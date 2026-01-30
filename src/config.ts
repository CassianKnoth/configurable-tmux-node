import 'dotenv/config';
import { Shell, Window } from './types/config-types.js';

export const shell: Shell = 'zsh';

export const configuredSessions: Record<string, Window[]> = {
	testSession: [
		{
			name: 'test-window',
			workspacePath: process.env.TEST_WORKSPACE_PATH || '',
			additionalPanes: [
				{
					name: 'server',
				},
				{
					name: 'watcher',
					subPath: 'src',
					command: 'echo "HELLO FROM WATCHER"',
				},
			],
		},
		{
			name: 'another-window',
			workspacePath: process.env.TEST_WORKSPACE_PATH || '',
			additionalPanes: [
				{
					name: 'tester',
					command: 'echo "HELLO FROM TESTER !!!"',
				},
			],
		},
	],
	anotherSession: [
		{
			name: 'yet-another-test-window',
			workspacePath: process.env.TEST_WORKSPACE_PATH || '',
			additionalPanes: [
				{
					name: 'yet-another-something',
				},
			],
		},
	],
};
