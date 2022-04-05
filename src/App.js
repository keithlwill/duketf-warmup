import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TimeReturner from './components/TimeReturner';
import TimeSelector from './components/TimeSelector';

function App() {
  return (
    <div className = "App">
      <Header/>
      <TimeReturner/>
    </div>
  );
}

export default App;
