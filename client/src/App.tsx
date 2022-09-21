
import Bulten from './components/Bulten';
import Collections, { Chiefs, Recipes } from './components/Collections';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Map from './components/Map';
import Mobil from './components/Mobil';
import Navbar from './components/Navbar';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
      <Collections />
      <Chiefs />
      <Recipes />
      <Map />
      <Mobil />
      <Bulten />
      <Footer />
    </div>
  );
}

export default App;
