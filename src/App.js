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
    <div className='app'>
      <div className='sidebar'>
        <p>Home</p>
        <p>Create a Crewmate</p>
        <p>View Crewmates</p>
      </div>
      <div className='content'>
        {element}
      </div>
    </div>
  );
}

export default App;
