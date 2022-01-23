import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="welcome">
        <h1>Hi, my name is Ryan</h1>
        <h5>I'm a web developer</h5>
      </div>
    </div>
  );
}

export default App;
