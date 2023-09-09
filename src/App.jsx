import './App.css';
import Greetings from './Components/Greetings/Greetings';
import UserData from './Components/UserData/UserData';
import Button from './Components/Button/Button';
import Counter from './Components/Counter/Counter';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Greetings />
      <UserData />
      <h2>Vamos a crear un botón:</h2>
      <Button label="Click" color={32} />
      <hr />
      <h2>Ahora, hagamos un contador:</h2>
      <Counter />
      <hr />
      <h2>Incluyendo productos:</h2>
      <ItemListContainer />
    </div>
  );
}

export default App;