import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './components/temperConv';
import TodoList from './components/todo';

function App() {
  return (
    <div>
      <h2>Конвертер Температуры</h2>
      <TemperatureConverter />
      <h2>Список Дел</h2>
      <TodoList />
    </div>
  );
}

export default App;
