type response = {
    'data': {
        'Page': {
            'media': [{
                'coverImage': {
                    'medium': string
                }

                'id': number,
                'description': string
                'title': {
                    'english': string
                    'romaji': string
                }
            }]
        }
    }
}

//Code to fetch data from anilist api accoding to documentation.
//Modified to fetch 51 anime 1-51 by id
export default async function callAniList(name: string) {
    if (name === '') {
        var query = `query {
                    Page(page: 1, perPage: 51) {
                        media(type: ANIME, isAdult:false) {
                            id
                            title {
                                english
                                romaji
                            }
                            description
                            coverImage{
                                medium
                            }  
                        }
                    }
                }`;
    }
    else{
        var query = `query {
            Page(page: 1, perPage: 51) {
                media(type: ANIME, isAdult:false, search:"${name}") {
                    id
                    title {
                        english
                        romaji
                    }
                    description
                    coverImage{
                        medium
                    }  
                }
            }
        }`;
    }
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