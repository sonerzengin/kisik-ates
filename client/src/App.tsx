
import Collections, { Chiefs, Recipes } from './components/Collections';
import Header from './components/Header';
import Intro from './components/Intro';
import Map from './components/Map';
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
    </div>
  );
}

export default App;
