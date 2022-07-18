import { useState } from 'react';
import './App.css';


function App() {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodoList] = useState([]);

const handleChange = () => {

}
  return (
    <div className="App">
        <div className='header'>
          <div className="inputContainer">
          <input type="text" placeholder="Mes taches..." 
          onChange={handleChange} />
          <input type="number" placeholder="Temps"
           onChange={handleChange} />
          </div>
          <button>Ajouter une tâche</button>
        </div>
        <div className='todoList'></div>
    </div>
  );
}

export default App;
