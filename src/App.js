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
        <Link to="/"><button className="sideButton"> Home </button></Link>
        <p>Create a Crewmate</p>
        <Link to="/view"><button className="sideButton"> View Crewmates </button></Link>
      </div>
      <div className='content'>
        {element}
      </div>
    </div>
  );
}

export default App;
