import { Route, Routes, useLocation } from "react-router-dom"

// Component imports
import Home_Page from "../src/Components/Home_Page"
import Fare_Calculator from "../src/Components/Fare_Calculator"
import Tickets from "../src/Components/Tickets"
import Tour_Guide from "../src/Components/Tour_Guide"
import Full_Map from "../src/Components/Full_Map"

const Routing = () => {

  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Home_Page />} />
        <Route path="/fare_calculator" element={<Fare_Calculator />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tour_guide" element={<Tour_Guide />} />
        <Route path="/map" element={<Full_Map />} />
      </Routes>
    </div>
  );
};

export default Routing;