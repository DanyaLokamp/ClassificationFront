import Immutable from 'seamless-immutable';
import * as types from '../actions/'

const initialState = Immutable({
    articles: null,
    dateFrom: null,
    dateTo: null
})

export default function reduce(state = initialState, { type, payload }) {
    switch (type) {
        case types.ON_ARTICLES_RECEIVED: {
            const { articles } = payload;

            return { 
                ...state, 
                articles: articles,
            };
        }
        // case types.ON_ARTICLES_CLEARED: {
        //     return {
        //         ...state,
        //         articles: null
        //     }
        // }
        // case types.ON_ARTICLES_DATE_SET: {
        //     const { dateFrom, dateTo } = payload;
        //     console.log(dateFrom, ' ', dateTo);
        //     return {
        //         ...state,
        //         dateFrom: dateFrom,
        //         dateTo: dateTo
        //     }
        // }
    default:
        return state;
    }
}