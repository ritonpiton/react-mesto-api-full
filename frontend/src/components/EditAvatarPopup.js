import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = React.useRef(null);

    function handleChange(e) {
        avatarRef.current.value = e.target.value;
    }
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
        avatarRef.current.value = '';
    }
    return (
        <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="form__field">
                <input name="avatar-link" id="avatar-input" type="url" placeholder="Ссылка на картинку" onChange={handleChange}
                       ref={avatarRef} className="form__input form__input_type_avatar-link" required />
                <span className="form__input-error avatar-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;