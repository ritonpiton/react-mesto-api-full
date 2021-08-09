//export const BASE_URL = '//localhost:3001'
export const BASE_URL = '//api.mesto.frontend.domain.nomoredomains.rocks';

const checkResponse = (res) => {
    if (res.ok) return res.json();
}

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
        .then(res => checkResponse(res))
}

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
        .then(res => checkResponse(res))
}

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(res => checkResponse(res))
        .then(data => data)
}