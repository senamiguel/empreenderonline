import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Threads from '../components/common/Threads';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
  };

  return (
    <main className="login-container">
      <div className="login-background">
        <Threads
          amplitude={2}
          distance={1}
          enableMouseInteraction={true}
          color={[0, 0.55, 0.39]} 
        />
      </div>
      <article className="login-box">
        <header>
          <h2>Login</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <fieldset className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </fieldset>
          <fieldset className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />
          </fieldset>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        <footer className="login-links">
          <Link to="/forgot-password">Esqueceu sua senha?</Link>
          <p>
            Não tem uma conta? <Link to="/register">Registre-se</Link>
          </p>
        </footer>
      </article>
    </main>
  );
};

export default Login; 