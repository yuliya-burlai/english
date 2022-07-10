import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { MainPage } from './components/MainPage';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { Footer } from './components/Footer';

function App() {

  return (
    <main className="App">
      <Header />
      <MainPage />
      <Slider />
      <Footer />
    </main>
  )
}

export default App
