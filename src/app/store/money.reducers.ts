import * as ItemActions from './item.actions';
import { MoneyState } from './app.state';

const INITIAL_STATE: MoneyState = {
    ballance: 0
};

export const reducer = (state: MoneyState = INITIAL_STATE, action: ItemActions.ItemClicked) => {
    switch (action.type) {
        case ItemActions.ITEM_CLICKED:
            return {
                ...state,
                ballance: state.ballance + action.item.baseValue,
            };
        default:
            return state;
    }
};
