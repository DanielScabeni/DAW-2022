import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/Home';

import './assets/css/normalize.css';
import './assets/css/global.css';

function App() {

  return (
    <div className="App">
      
      <Header />

      <main>
        <Routes>
                    <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
