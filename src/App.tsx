import { useState, ChangeEvent } from 'react';
import TodoTask from './Components/todoTask';
import {ITask} from './Interfaces'
import './App.css';

function App() {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "task") {
    setTask(e.target.value)
    } else {
      setDeadline(Number(e.target.value))
    }
  };


  const addTask = (): void => {
    const taskforce = { taskName: task, deadline: deadline};
    setTodoList([...todoList, taskforce]);
    setTask("");
    setDeadline(0);
  };
const completeTask = (taskNameToDelete: string): void => {
  setTodoList(todoList.filter((task)=> {
return task.taskName !== taskNameToDelete
  }))
}
  return (
    <div className="App">
      <div className='header'>
        <div className="inputContainer">
          <input type="text" placeholder="Mes taches..."
            onChange={handleChange} 
            name="task"
            value={task}/>
          <input type="number" placeholder="Temps"
            onChange={handleChange} 
            name='deadline'
            value={deadline}
            />
        </div>
        <button onClick={addTask}>Ajouter une tâche</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
