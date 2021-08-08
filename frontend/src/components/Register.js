import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Register({ handleRegister }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    function handleChange(e) {
        const name = e.target.name === 'email' ? 'email' : 'password';
        const value = e.target.value;
        if (name === 'email') setEmail(value)
        if (name === 'password') setPassword(value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        handleRegister(password, email);
    }

    return (
        <div className="register">
            <h1 className="welcome-text">Зарегистрироваться</h1>
            <form className="welcome-form" onSubmit={handleSubmit}>
                <label className="welcome-form__field">
                    <input name="email" id="email-input" type="email" placeholder="Email" value={email} onChange={handleChange}
                           className="welcome-form__input form__input_type_email" minLength="5" maxLength="200" required />
                    <span className="form__input-error email-input-error"></span>
                </label>
                <label className="welcome-form__field">
                    <input name="password" id="password-input" type="password" placeholder="Пароль" value={password} onChange={handleChange}
                           className="welcome-form__input form__input_type_job" minLength="2" maxLength="200" required />
                    <span className="form__input-error job-input-error"></span>
                </label>
                <button type="submit" className="welcome-form__submit-btn">Зарегистрироваться</button>
            </form>
            <div className="register__sign-in">
                <p className="register__text">Уже зарегистрированы? <Link to="/signin" className="register__login-link">Войти</Link></p>
            </div>
        </div>

    )
}

export default withRouter(Register);