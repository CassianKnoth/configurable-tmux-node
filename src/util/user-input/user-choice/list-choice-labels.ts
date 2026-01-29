import { Choice } from '../../../types/user-choice-types.js';

export const listChoiceLabels = (choiceList: Choice[]): string => {
	if (!choiceList[0]) {
		return '';
	}

	let choiceLabelList = choiceList[0].optionLabel;
	const separator = ', ';

	choiceList
		.slice(1)
		.forEach(
			(choice) =>
				(choiceLabelList = choiceLabelList + separator + choice.optionLabel),
		);

	choiceLabelList = choiceLabelList + ': ';

	return choiceLabelList;
};
