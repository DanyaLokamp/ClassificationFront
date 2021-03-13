import Immutable from 'seamless-immutable';
import * as types from '../actions'

const initialState = Immutable({
    isLoading: true
})

export default function reduce(state = initialState, {type, payload}) {
    switch(type) {
        case types.ON_LOAD: {
            const { isLoading } = payload;

            return {
                ...state,
                isLoading: isLoading
            };
        }
        default:
            return state;
    }
}