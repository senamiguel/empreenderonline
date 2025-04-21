import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Threads from '../components/common/Threads';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="login-container">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <Threads
          amplitude={2}
          distance={1}
          enableMouseInteraction={true}
          color={[0, 0.55, 0.39]} 
        />
      </div>
      <div className="login-box">
        <h2>Recuperar Senha</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email cadastrado"
            />
          </div>
          <button type="submit" className="login-button">
            Enviar Link de Recuperação
          </button>
        </form>
        <div className="login-links">
          <Link to="/login">Voltar para o login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 