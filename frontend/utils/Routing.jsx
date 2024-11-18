import { Route, Routes } from "react-router-dom"

// Component imports
import Home_Page from "../src/Components/Home_Page"
import Fare_Calculator from "../src/Components/Fare_Calculator"
import Tickets from "../src/Components/Tickets"
import Tour_Guide from "../src/Components/Tour_Guide"
import Full_Map from "../src/Components/Full_Map"
import AdminDash from "../src/Components/AdminComponents/AdminDash"
import All_Users from "../src/Components/AdminComponents/All_Users"
import New_Driver from "../src/Components/AdminComponents/New_Driver"
import All_Drivers from "../src/Components/AdminComponents/All_Drivers"
import New_Stop from "../src/Components/AdminComponents/New_Stop"
import All_Stops from "../src/Components/AdminComponents/All_Stops"
import New_Route from "../src/Components/AdminComponents/New_Route"
import All_Routes from "../src/Components/AdminComponents/All_Routes"
import UserLoginForm from "../src/Components/SubComponents/UserLoginForm"
import UserRegForm from "../src/Components/SubComponents/UserRegForm"
import NotFound1 from "../src/Components/SubComponents/NotFound1"


const Routing = () => {

  return (
    <div>
      <Routes>

        <Route path="/" element={<Home_Page />} />
        <Route path="/fare_calculator" element={<Fare_Calculator />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tour_guide" element={<Tour_Guide />} />
        <Route path="/map" element={<Full_Map />} />
        <Route path="/register" element={<UserRegForm />} />

        <Route path="/user_login" element={<UserLoginForm />}/>

        <Route path="/not_found" element={<NotFound1 />} />

        <Route path="/admindashboard" element={<AdminDash />} >
        
          <Route path="/admindashboard/all_users" element={<All_Users />} />
          <Route path="/admindashboard/new_driver" element={<New_Driver />} />
          <Route path="/admindashboard/all_drivers" element={<All_Drivers />} />
          <Route path="/admindashboard/new_stop" element={<New_Stop/>} />
          <Route path="/admindashboard/all_stops" element={<All_Stops/>} />
          <Route path="/admindashboard/new_route" element={<New_Route/>} />
          <Route path="/admindashboard/all_routes" element={<All_Routes/>} />
        
        </Route>

      </Routes>
    </div>
  );
};

export default Routing;