import './App.css';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import HomePage from './pages/HomePage'



function App() {

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<HomePage/>
    }
  ]);

  return (
    <div>
      <div className='header'>
        <h1>Among us</h1>
      </div>
      {element}
    </div>
  );
}

export default App;
