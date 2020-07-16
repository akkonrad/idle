import * as TimeActions from './time.actions';
import { TimeState } from './app.state';

const INITIAL_STATE: TimeState = {
    seconds: 0
};

export const reducer = (state: TimeState = INITIAL_STATE, action: TimeActions.Actions) => {
    switch (action.type) {
        case TimeActions.TIME_SECOND:
            return {
                ...state,
                seconds: state.seconds + 1
            };
        default:
            return state;
    }
};
