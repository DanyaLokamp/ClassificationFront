export const getAction = {
    getArticles: 'getArticles',
    getTags: 'getTags'
}

export const processGetAction = async (actionName, args) => {
    switch (actionName) {                
        case getAction.getArticles:
            if (args.dateFrom && args.dateTo) 
                return await get(`http://localhost:1337/api/articles/?start=${args.dateFrom}&end=${args.dateTo}`);
        case getAction.getTags:
            const url = 'http://localhost:1337/api/tags/'; 
            return await get(url)
        default:
            break;
    }
}

const get = async(url) => {
    const response = await fetch(url,
        {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        })

        console.log(response)
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