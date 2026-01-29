import { ChoiceHandler } from '../../../../types/user-choice-types.js';

export const exitHandler: ChoiceHandler = () => {
	return { sessionState: 'EXIT', sessionName: '' };
};
