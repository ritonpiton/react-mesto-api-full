import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose, onAddCard}) {
    const nameRef = React.useRef(null);
    const linkRef = React.useRef(null);

    React.useEffect(() => {
        nameRef.current.value = '';
        linkRef.current.value = '';
    }, [isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        onAddCard({
            name: nameRef.current.value,
            link: linkRef.current.value,
        });
    }
    return (
        <PopupWithForm title="Новое место" name="add" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <label className="form__field">
                <input name="place-name" id="place-input" type="text" placeholder="Название"
                       ref={nameRef} className="form__input form__input_type_place-name" minLength="2" maxLength="30" required />
                <span className="form__input-error place-input-error"></span>
            </label>
            <label className="form__field">
                <input name="place-link" id="url-input" type="url" placeholder="Ссылка на картинку"
                       ref={linkRef} className="form__input form__input_type_place-link" required/>
                <span className="form__input-error url-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
