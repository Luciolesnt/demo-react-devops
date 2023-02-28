import logo from './eye-react.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/Luciolesnt/demo-react-devops/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github project
        </a>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          DockerHub Image
        </a>
      </header>
    </div>
  );
}

export default App;
