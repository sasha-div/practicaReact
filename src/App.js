import './App.css';
import Greetings from './Components/Greetings/Greetings';
import UserData from './Components/UserData/UserData';
import Button from './Components/Button/Button';

function App() {

  return (
    <div className="App">
      <Greetings />
      <UserData />
      <h2>¡Vamos a crear un botón!</h2>
      <Button />
    </div>
  );
}

export default App;