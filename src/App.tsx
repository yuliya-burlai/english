import './App.scss'
import { MainPage } from './components/MainPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {

  return (
    <main className="App">
      <Header />
      <MainPage />
      <Footer />
    </main>
  )
}

export default App
