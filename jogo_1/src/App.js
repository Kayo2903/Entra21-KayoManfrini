import './App.css';
import { Board } from './components/Board';
import { Square } from './components/Square';
import { Game } from './components/Game';

function App() {
  return (
    <div className="App">
      <Board/>
      <Square/>
      <Game/>     
    </div>
  );
}

export default App;
