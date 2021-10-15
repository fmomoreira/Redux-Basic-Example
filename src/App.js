import { Provider } from 'react-redux'
import store from './store'
import Aulas from './Aulas'
import Video from './Video'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Video/>
        <Aulas/>
      </Provider>
    </div>
  );
}

export default App;
