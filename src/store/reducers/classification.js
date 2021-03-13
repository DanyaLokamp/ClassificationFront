import Immutable from 'seamless-immutable';
import * as types from '../actions/'

const initialState = Immutable({
    articleClass: null,
})

export default function reduce(state = initialState, { type, payload }) {
    switch (type) {
        case types.ON_CLASSIFICATION_REQUESTED: {
            return {
                ...state,
                articleClass: null,
            };
        }
        case types.ON_CLASSIFICATION_RECEIVED: {
            const { result } = payload;

            return { 
                ...state, 
                articleClass: result,
            };
        }
        case types.ON_CLASSIFICATION_CLEARED: {
            return { 
                ...state,
                articleClass: null
            }
        }
    default:
        return state;
    }
}