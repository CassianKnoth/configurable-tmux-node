// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// import { SessionState } from '../../types/state.js';
// import {
// 	AllChoices,
// 	Choice,
// 	UserChoice,
// 	UserChoiceList,
// } from '../../types/user-choice-types.js';

// const listChoiceLabels = (choiceList: Choice[]): string => {
// 	const choiceLabelList = choiceList.reduce((prev, curr) => {
// 		return prev + curr.label + ', ';
// 	}, '');

// 	return choiceLabelList;
// };

/**
 * Present the user with a set of choices and handle the input accordingly.
 *
 * @param availableChoices Opt in parameter for available choices.
 * Value is always `true`, the property just needs to be set. All omitted properties will not be listed as choice.
 *
 * Choices: `attach`, `destroy`, `restart`, `other`
 */
// export const handleUserChoice = async (availableChoices: UserChoiceList): SessionState => {
// 	const parsedAvailableOptions = Object.keys(availableChoices).map(
// 		(choiceKey) => {
// 			return choices[choiceKey as UserChoice];
// 		},
// 	);

// 	const question = `👉 The choice is yours: ${listChoiceLabels(parsedAvailableOptions)}[e]xit (all other keys)`;

// 	console.log(question);

// const rl = readline.createInterface({ input, output });

// const answer = await rl.question('👉 The choice is yours: [o]ther: ');

// rl.close();

// attach
// destroy
// restart
// other
// };
