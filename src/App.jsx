import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Funciona from './components/sections/Funciona'
import Banner from './components/sections/Banner'
import UseCases from './components/sections/UseCases'
import Pricing from './components/sections/Pricing'
import Faq from './components/sections/Faq'
import Footer from './components/layout/Footer'
import Login from './pages/Login'

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
      </Routes>
    </Router>
  )
}

export default App
