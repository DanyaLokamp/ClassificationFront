export const ON_CLASSIFICATION_REQUESTED = 'classification.ON_CLASSIFICATION_REQUESTED';
export const ON_CLASSIFICATION_RECEIVED = 'classification.ON_CLASSIFICATION_RECEIVED';
export const ON_LOAD = 'load.ON_LOAD';
export const ON_ERROR = 'error.ON_ERROR';
export const ON_TAGS_RECEIVED = 'tags.ON_TAGS_RECEIVED';
export const ON_CLASSIFICATION_CLEARED = 'classification.ON_CLASSIFICATION_CLEARED'
export const ON_ARTICLES_RECEIVED = 'articles.ON_ARTICLES_RECEIVED'
export const ON_ARTICLES_DATE_SET = 'articles.ON_ARTICLES_DATE_SET'
export const ON_ARTICLES_CLEARED = 'articles.ON_ARTICLES_CLEARED'

const actions = {
    setLoad: isLoading => dispatch => {
        dispatch({type: ON_LOAD, payload: {isLoading}});
    },
    removeClassification: () => dispatch => {
        dispatch({type: ON_CLASSIFICATION_CLEARED, payload: {}})
    },
    setClassificationResultRequested: () => dispatch => {
        dispatch({type: ON_CLASSIFICATION_REQUESTED, payload: {}});
    },
    setError: error => dispatch => {
        dispatch({type: ON_ERROR, payload: {error}});
    },
    setTags: tags => dispatch => {
        dispatch({type: ON_TAGS_RECEIVED, payload: {tags}});
    },
    setClassificationResultReceived: result => dispatch => {
        dispatch({type: ON_CLASSIFICATION_RECEIVED, payload: {result}});
    },
    setArticles: articles => dispatch => {
        dispatch({type: ON_ARTICLES_RECEIVED, payload: {articles}});
    },
    resetArticles: () => dispatch => {
        dispatch({type: ON_ARTICLES_CLEARED, payload: {}})
    }
    // setArticleDates: (dateFrom, dateTo) => dispatch => {
    //     dispatch({type: ON_ARTICLES_DATE_SET, payload: {dateFrom, dateTo}})
    // }
}

export default actions;