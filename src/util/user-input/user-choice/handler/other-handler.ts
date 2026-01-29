import { ChoiceHandler } from '../../../../types/user-choice-types.js';
import { freshState } from '../../../state/fresh-state.js';

export const otherHandler: ChoiceHandler = () => {
	return freshState;
};
