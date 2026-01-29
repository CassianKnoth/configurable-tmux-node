import { AllChoices } from '../../../types/user-choice-types.js';
import { attachHandler } from './handler/attach-handler.js';
import { destroyHandler } from './handler/destroy-handler.js';
import { exitHandler } from './handler/exit-handler.js';
import { otherHandler } from './handler/other-handler.js';
import { restartHandler } from './handler/restart-handler.js';

export const choices: AllChoices = {
	attach: {
		label: 'attach',
		optionLabel: '[a]ttach',
		regex: /a$|attach/i,
		handler: attachHandler,
	},
	destroy: {
		label: 'destroy',
		optionLabel: '[d]estroy',
		regex: /d$|destroy/i,
		handler: destroyHandler,
	},
	restart: {
		label: 'restart',
		optionLabel: '[r]estart',
		regex: /r$|restart/i,
		handler: restartHandler,
	},
	other: {
		label: 'other',
		optionLabel: '[o]ther',
		regex: /o$|other/i,
		handler: otherHandler,
	},
	exit: {
		label: 'exit',
		optionLabel: '[e]xit',
		regex: /e$|exit/i,
		handler: exitHandler,
	},
};
