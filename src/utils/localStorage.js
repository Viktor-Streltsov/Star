export const getLocolStorage = key => {
    const data = localStorage.getItem(key);

    if(data !== null) {
        return JSON.parse(data);
    }

    return {};

}

export const setLocalStorege = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}