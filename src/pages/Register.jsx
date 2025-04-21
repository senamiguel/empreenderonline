import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Threads from '../components/common/Threads';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration attempt with:', formData);
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
          <h2>Criar Conta</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <fieldset className="input-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </fieldset>
          <fieldset className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </fieldset>
          <fieldset className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </fieldset>
          <fieldset className="input-group">
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </fieldset>
          <button type="submit" className="login-button">
            Criar Conta
          </button>
        </form>
        <footer className="login-links">
          <p>
            Já tem uma conta? <Link to="/login">Faça login</Link>
          </p>
        </footer>
      </article>
    </main>
  );
};

export default Register; 