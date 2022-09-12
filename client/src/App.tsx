
import Collections from './components/Collections';
import Header from './components/Header';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
      <Collections />
    </div>
  );
}

export default App;
