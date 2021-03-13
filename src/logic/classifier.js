import * as classifierService from '../services/classifier'
import { default as storeActions } from '../store/actions';

export const removeClassification = () => {
    return async dispatch => {
        dispatch(storeActions.removeClassification())
    }
}

export const classifyText = args => {
    return async dispatch => {
        const json_body = {
            'article_text': args
        }

        dispatch(storeActions.setClassificationResultRequested())

        const response = await classifierService.processPostAction(
            classifierService.postAction.classifyText, 
            json_body);

        if (response.isError) {
            dispatch(storeActions.setError(response.message));
        }

        dispatch(storeActions.setClassificationResultReceived(response.class));
    }
}