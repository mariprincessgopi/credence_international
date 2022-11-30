import { BrowserRouter } from 'react-router-dom';
import Routess from './route/route';
import './assets/bootstrapcss/main.scss';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routess></Routess>
      </BrowserRouter>
    </div>
  );
}

export default App;
