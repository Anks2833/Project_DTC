import { NavLink } from "react-router-dom";

//Component imports
import Service_Card from "./SubComponents/Service_Card"

//React icons
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
import { FaPersonMilitaryPointing } from "react-icons/fa6";


const Page3 = () => {

  const serviceCard = [
    {id: 1, name: "Fare Calculator", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore dicta mollitia quae eius error ullam saepe veritatis praesentium corrupti.", icon: <RiMoneyRupeeCircleFill />, linkName: "fare_calculator"},
    {id: 2, name: "Tickets", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore dicta mollitia quae eius error ullam saepe veritatis praesentium.", icon: <IoTicketSharp />, linkName: "tickets"},
    {id: 3, name: "Tour Guide", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore dicta mollitia quae eius error ullam saepe veritatis.", icon: <FaPersonMilitaryPointing />, linkName: "tour_guide"},
  ]


  return (
    <div className="w-full min-h-screen bg-[#00091d] pt-20 flex flex-col items-center">
        
        {/* Heading */}
        <div>
            <h1 className="text-5xl font-semibold">Our Services</h1>
        </div>

        {/* Cards */}
        <div className="w-full px-60 py-20 flex flex-wrap justify-start gap-6">

            {serviceCard.map(serv => {
              return (
                <NavLink to={`/${serv.linkName}`} key={serv.id}><Service_Card name={serv.name} description={serv.description} icon={serv.icon} /></NavLink>
              )
            })}

        </div>



    </div>
  )
}

export default Page3
