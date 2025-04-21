import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
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
              <Footer></Footer>
            </main>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
