import './App.css';
import Contact from './components/contact';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-one"><h1>Kamlesh Panwar</h1></div>
        <h3>
        Front end developer
        </h3>
        <Hero/>
        &nbsp;
        &nbsp;

        <Contact/>
      </header>
    </div>
  );
}

export default App;
