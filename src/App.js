import './App.css';
import Masthead from './component/Masthead';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Badges from './component/Badges';
import TeamBadges from './component/TeamBadges';

function App() {
  return (
    <div className="App">
      <Masthead />
      <Portfolio />
      <TeamBadges />
      <Services />
      {/* <About /> */}
    </div>
  );
};

export default App;
