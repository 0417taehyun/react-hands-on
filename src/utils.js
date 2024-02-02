function hasHangeul(text) {
    return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
}

const jsonLocalStorage = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
        return JSON.parse(localStorage.getItem(key));
    }
};

export {hasHangeul, jsonLocalStorage};
