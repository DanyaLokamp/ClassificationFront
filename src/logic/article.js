import * as articleService from '../services/article';
import { default as storeActions } from '../store/actions';

export const getTags = () => {
    return async dispatch => {
        const response = await articleService.processGetAction(
            articleService.getAction.getTags,
            null
        );

        if (response.isError) {
            dispatch(storeActions.setError(response.message));
        }

        dispatch(storeActions.setTags(response))
    }
}

export const getArticles = (dateFrom, dateTo) => {
    return async dispatch => {
        const response = await articleService.processGetAction(
            articleService.getAction.getArticles,
            { dateFrom, dateTo }
        );

        // dispatch(storeActions.resetArticles());

        if (response.isError) {
            dispatch(storeActions.setError(response.message));
        }

        dispatch(storeActions.setArticles(response))
    }
}

// export const setArticleDates = (dateFrom, dateTo) => {
//     return async dispatch => {
//         dispatch(storeActions.setArticleDates(dateFrom, dateTo));
//     }
// }