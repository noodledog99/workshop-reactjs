const TOKEN_KEY = 'userId'

export const setTokenLogin = (id) => {
  localStorage.setItem(TOKEN_KEY, id);
};

export const isLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}
