import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Threads from '../components/common/Threads';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
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
          <h2>Recuperar Senha</h2>
          <p>Digite seu email para receber as instruções de recuperação de senha.</p>
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
          <button type="submit" className="login-button">
            Enviar Instruções
          </button>
        </form>
        <footer className="login-links">
          <Link to="/login">Voltar para o login</Link>
        </footer>
      </article>
    </main>
  );
};

export default ForgotPassword; 