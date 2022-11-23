import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/Home';
import { SobrePage } from './pages/Sobre';

import './assets/css/normalize.css';
import './assets/css/global.css';

function App() {

  return (
    <div className="App">
      
      <Header />

      <main>
        <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre" element={<SobrePage />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
