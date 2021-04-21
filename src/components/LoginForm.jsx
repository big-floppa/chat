import React from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      'Project-ID': '5a265922-52d6-407b-8d59-8a61344a5590',
      'User-Name': userName,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', userName);
      localStorage.setItem('password', password);
      window.location.reload();
    } catch (error) {
      setError('Неверно введен логин или пароль');
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Чат для друзей</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={userName}
            placeholder="Логин"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Подключиться к чату</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
