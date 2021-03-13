import Immutable from 'seamless-immutable';
import * as types from '../actions/'

const initialState = Immutable({
    tags: null,
})

export default function reduce(state = initialState, { type, payload }) {
    switch (type) {
        case types.ON_TAGS_RECEIVED: {
            const { tags } = payload;

            return { 
                ...state, 
                tags: tags,
            };
        }
    default:
        return state;
    }
}