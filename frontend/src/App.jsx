import { useLocation } from "react-router-dom"

import Routing from '../utils/Routing'

// Component imports
import Navbar from './Components/SubComponents/Navbar'
import NotFound from "./Components/AdminComponents/NotFound";

const App = () => {


  const excludedPaths = [
    '/map', 
    '/admindashboard', 
    '/admindashboard/all_users',
    '/admindashboard/all_drivers',
    '/admindashboard/all_routes',
    '/admindashboard/all_stops',
    '/admindashboard/new_driver',
    '/admindashboard/new_route',
    '/admindashboard/new_stop',
  ];

  const location = useLocation();

  return (
    <div className='w-full min-h-screen bg-black text-white'>

      {!excludedPaths.includes(location.pathname) && <Navbar />}
      <Routing />

    </div>
  )
}

export default App