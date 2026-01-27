import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export const getUserInput = async (prompt: string): Promise<string> => {
	const rl = readline.createInterface({ input, output });
	const userInput = await rl.question(prompt);
	rl.close();

	return userInput.trim();
};
