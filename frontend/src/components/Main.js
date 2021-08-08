import React from 'react';
import addButton from '../images/add-btn.svg';
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                    <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
                </div>

                <div className="profile__cover">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
                    <p className="profile__job">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__add-btn" onClick={onAddPlace}>
                    <img src={addButton} alt="Добавить карточку" />
                </button>
            </section>
            <section className="places">
                {cards.map(item => {
                        return (
                            <Card key={item._id} card={item} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
                        )
                    }
                )}
            </section>
        </main>
    );
}

export default Main;