import './styles/App.css'
import Funciona from './components/sections/Funciona'
import Banner from './components/sections/banner'
import UseCases from './components/sections/UseCases'
import Pricing from './components/sections/Pricing'
import Faq from './components/sections/Faq'
import Footer from './components/layout/Footer'
function App() {


  return (
    <main>
      <Banner></Banner>
      <Funciona></Funciona>
      <UseCases></UseCases>
      <Pricing></Pricing>
      <Faq></Faq>
      <Footer></Footer>
    </main>
  )
}

export default App
