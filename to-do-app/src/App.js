
import './App.css';

import { Todo } from './components/Todo';
import { Provider } from "react-redux"
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo-App Using Redux</h1>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
