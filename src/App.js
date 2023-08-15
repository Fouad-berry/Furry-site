import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/Home/NavBar';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Home/>
    </div>
  );
}

export default App;