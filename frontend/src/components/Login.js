import React from 'react';
import { withRouter } from 'react-router-dom';

function Login({ handleLogin }) {
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
        handleLogin(password, email)
    }

    return (
        <div className="content">
            <h1 className="welcome-text">Войти</h1>
            <form className="welcome-form" onSubmit={handleSubmit}>
                <label className="welcome-form__field">
                    <input name="email" id="email-input" type="email" placeholder="Email" value={email} onChange={handleChange}
                           className="welcome-form__input welcome-form__input_type_email" minLength="5" maxLength="200" required />
                    <span className="form__input-error email-input-error"></span>
                </label>
                <label className="welcome-form__field">
                    <input name="password" id="password-input" type="password" placeholder="Пароль" value={password} onChange={handleChange}
                           className="welcome-form__input form__input_type_job" minLength="2" maxLength="200" required />
                    <span className="form__input-error job-input-error"></span>
                </label>
                <button type="submit" className="welcome-form__submit-btn">Войти</button>
            </form>
        </div>
    )
}

export default withRouter(Login);
