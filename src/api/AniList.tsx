type response = {
    'data': {
        'Page': {
            'media': [{
                'coverImage': string,
                'id': number,
                'title': {
                    'english': string
                }
            }]
        }
    }
}

//Code to fetch data from anilist api accoding to documentation.
//Modified to fetch 50 anime 1-50 by id
export default async function callAniList() {
    var query = `query {
                    Page(page: 1, perPage: 50) {
                        media(type: ANIME) {
                            id
                            title {
                                english
                            }
                            coverImage{
                                medium
                            }  
                        }
                    }
                }`;

    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
            })
        };
    return fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleError);
}

function handleResponse(response: Response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data: response) {
    return data.data.Page.media;
}

function handleError(error: any) {
    alert('Error, check console');
    console.error(error);
}