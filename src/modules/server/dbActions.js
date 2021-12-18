

const dbActions = Object.freeze({
    //Постфикс для firebase
    urlPostFix: ".json",

    //Общие функции для обращения к серверу
    get(baseUrl, id) {
        if (id === undefined) {
            id = "";
        } else {
            addLastSlash(baseUrl);
        }

        return fetch(`${baseUrl}${id}${this.urlPostFix}`)
            .then((response) => response.json());
    },

    add(url, obj) {
        return fetch(url + this.urlPostFix, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((response) => response.json());
    },

    delete(baseUrl, id) {
        addLastSlash(baseUrl);
        return fetch(`${baseUrl}${id}${this.urlPostFix}`, {
            method: 'DELETE',
        }).then((response) => response.json());
    },

    edit(baseUrl, id, data) {
        addLastSlash(baseUrl);
        return fetch(`${baseUrl}${id}${this.urlPostFix}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((response) => response.json());
    },
});

/**
 * Добавление "/" в конце {baseUrl}
 * @param {string} baseUrl 
 * @returns изменённые baseUrl
 */
function addLastSlash(baseUrl) {
    return baseUrl.charAt(baseUrl.length - 1) !== "/" ? baseUrl + "/" : baseUrl;
}

export default dbActions;