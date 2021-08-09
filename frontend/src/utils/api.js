class Api {
    constructor(data) {
        this._url = data.url
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }

    getInitialCards(token) {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(this._checkResponse)
    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(this._checkResponse)
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(this._checkResponse)
    }

    setUserAvatar(data, token) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._checkResponse)
    }

    addCard(data, token) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._checkResponse)
    }

    deleteCard(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(this._checkResponse)
    }

    changeLikeCardStatus(cardId, isLiked, token) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(this._checkResponse)
    }
}

const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;
// const BASE_URL = '//api.mesto.frontend.domain.nomoredomains.rocks';
export const api = new Api({
  url: BASE_URL,
});

export default api;