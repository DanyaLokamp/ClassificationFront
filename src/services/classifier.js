export const postAction = {
    classifyText: 'classifyText',
}

export const processPostAction = async (actionName, args) => {
    switch (actionName) {                
        case postAction.classifyText:
            return await post('http://localhost:1338/predict/', args);
        default:
            break;
    }
}

const post = async (url, args) => {
    const response = await fetch(url,
        {
            method: 'POST',
            body: JSON.stringify(args),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

    if (!response.ok) {
        return serviceBadRequest()
    }

    return await response.json().catch(() => { return serviceBadRequest() });
}

const serviceBadRequest = message => {
    return  {
        isError: true,
        message: message == null ? "Сервис временно недоступен." : message           
    };
}