import { Action } from './action.js';
import { SessionState } from './state.js';

export type UserChoice = 'attach' | 'destroy' | 'restart' | 'other' | 'exit';

type AllUserChoices = Record<UserChoice, true>;

type AtLeastOne<T> = {
	[K in keyof T]: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];

export type UserChoiceList = AtLeastOne<AllUserChoices>;

export type ChoiceHandler = () => SessionState;

type Choice = {
	/** How the option is presented to the user.
	 * @examples [r]estart (indicating "r" or "restart" triggers this option)
	 */
	label: string;
	/** Pattern to match the user input which can be variable
	 * e. g. match "o", "other" and "Other"
	 */
	regex: RegExp;
	/** Function to handle the given choice */
	handler: ChoiceHandler;
};
export type AllChoices = Partial<Record<UserChoice, Choice>>;
