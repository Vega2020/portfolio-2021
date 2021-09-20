import './App.css';
import Masthead from './component/Masthead';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <Masthead />
      <Services />
      <Portfolio />
      <About />
    </div>
  );
};

export default App;
