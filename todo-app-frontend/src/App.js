import './App.scss';
import TodoPage from './pages/TodoPage'
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoPage />
      </div>
    </Provider>
  );
}

export default App;
