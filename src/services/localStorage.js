const localStorageService = {
    setToken: (value) => localStorage.setItem('auth_token', value),
    getToken: () => localStorage.getItem('auth_token'),

    setUser: (value) => localStorage.setItem('user', value),
    getUser: () => localStorage.getItem('user')
}

export default localStorageService;