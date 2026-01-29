import { Choice, UserChoiceList } from '../../../types/user-choice-types.js';
import { choices } from './choices.js';

function isKeyOf<T extends object>(key: PropertyKey, obj: T): key is keyof T {
	return key in obj;
}

export const getParsedAvailableOptions = (
	availableChoices: UserChoiceList,
): Choice[] => {
	const parsedAvailableOptions = Object.keys(availableChoices)
		.map((choiceKey) => {
			if (isKeyOf(choiceKey, choices)) {
				return choices[choiceKey];
			} else {
				return undefined;
			}
		})
		.filter((choice): choice is Choice => choice !== undefined);

	return parsedAvailableOptions;
};
