import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `place__delete ${!isOwn && 'place__delete_hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(id => id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
       ` place__like ${isLiked && 'place__like_active'}`
    );

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleCardDelete() {
        onCardDelete(card);
    }

    return(
        <div className="place">
            <img className="place__image" alt={card.name} src={card.link} onClick={handleClick}/>
            <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
            <div className="place__content">
                <h2 className="place__title">{card.name}</h2>
                <div className="place__like-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <span className="place__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;