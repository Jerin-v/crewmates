import './App.css';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ViewCrew from './pages/ViewCrew'
import CreateCrew from './pages/CreateCrew'



function App() {

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<HomePage/>
    },
    {
      path: "/view",
      element:<ViewCrew/>
    },
    {
      path: "/create",
      element:<CreateCrew/>
    }
  ]);

  return (
    <div className='app'>
      <div className='sidebar'>
        <Link to="/"><button className="sideButton"> Home </button></Link>
        <Link to="/create"><button className="sideButton"> Create Crewmate </button></Link>
        <Link to="/view"><button className="sideButton"> View Crewmates </button></Link>
      </div>
      <div className='content'>
        {element}
      </div>
    </div>
  );
}

export default App;
