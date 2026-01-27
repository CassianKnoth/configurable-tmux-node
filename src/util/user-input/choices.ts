import { AllChoices } from '../../types/user-choice-types.js';
import { otherHandler } from './handler/other-handler.js';

export const choices: AllChoices = {
	// attach: {
	// 	label: '[a]ttach',
	// 	regex: /a$|attach/i,
	// 	handler: () => {},
	// },
	// destroy: {
	// 	label: '[d]estroy',
	// 	regex: /d$|destroy/i,
	// 	handler: () => {},
	// },
	// restart: {
	// 	label: '[r]estart',
	// 	regex: /r$|restart/i,
	// 	handler: () => {},
	// },
	other: {
		label: '[o]ther',
		regex: /o$|other/i,
		handler: otherHandler,
	},
	exit: {
		label: '[e]xit',
		regex: /e$|exit/i,
		handler: () => {
			return 'EXIT';
		},
	},
};
