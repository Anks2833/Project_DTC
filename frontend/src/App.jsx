import { useLocation } from "react-router-dom"

import Routing from '../utils/Routing'

// Component imports
import Navbar from './Components/SubComponents/Navbar'

const App = () => {

  const location = useLocation();

  return (
    <div className='w-full min-h-screen bg-black text-white'>

      {location.pathname !== '/map' && <Navbar />}
      <Routing />

    </div>
  )
}

export default App