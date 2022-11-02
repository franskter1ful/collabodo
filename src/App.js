import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App(props) {
  const subject = props.subject;
  return (
    <>
    <Navbar />
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> 
        Hello {subject}
      </p>
      </header>
    </div>
    </>
  );
}

export default App;
