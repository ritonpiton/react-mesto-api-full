import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        if ((currentUser.name && currentUser.about) !== undefined ) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser, isOpen]);

    function handleChange(e) {
        const name = e.target.name === 'name' ? 'name' : 'job';
        const value = e.target.value;
        if (name === 'name') setName(value)
        if (name === 'job') setDescription(value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
        setName('');
        setDescription('');
    }
    return (
        <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="form__field">
                <input name="name" id="name-input" type="text" placeholder="Имя" value={name} onChange={handleChange}
                       className="form__input form__input_type_name" minLength="2" maxLength="40" required />
                <span className="form__input-error name-input-error"></span>
            </label>
            <label className="form__field">
                <input name="job" id="job-input" type="text" placeholder="О себе" value={description} onChange={handleChange}
                       className="form__input form__input_type_job" minLength="2" maxLength="200" required />
                <span className="form__input-error job-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup;