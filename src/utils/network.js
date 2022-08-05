import { HTTP, HTTPS } from "@constans/api";

//Документирование функции
/**
 * Изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;

    return result;
}

/**
 * Отпровляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
// Вариант с асинхронвми функциями
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error('Coud not fetch.', res.status);
            return false;
        }

        return await res.json();
    }catch (error) {
        console.error('Coud not fetch.', error.message);
        return false;
    }
}

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();

// Вариант с промисами;

// export const getApiResource = (url) => {
//     fetch(url)
//     .then(res => res.json())
//     .then(body => console.log(body))
//     .catch(error => console.log(error.message))
// }


// getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     .then(body => console.log(body))


export const makeConcurerentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));

return res;
}