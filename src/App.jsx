import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/App.css'
import Funciona from './components/sections/Funciona'
import Banner from './components/sections/Banner'
import UseCases from './components/sections/UseCases'
import Pricing from './components/sections/Pricing'
import Faq from './components/sections/Faq'
import Footer from './components/layout/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Card from './components/common/Card'
import ContactPage from './pages/ContactPage'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Banner></Banner>
              <Funciona></Funciona>
              <UseCases></UseCases>
              <Pricing></Pricing>
              <Faq></Faq>
              {isMobile && (
                <div className="mobile-card-container">
                  <Card />
                </div>
              )}
              <Footer></Footer>
            </main>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
