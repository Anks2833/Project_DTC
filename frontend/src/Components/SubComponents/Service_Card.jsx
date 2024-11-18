import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Service_Card = (props) => {
  const { name, description, icon } = props;

  return (
    <NavLink to="/not_found">
      <div className="service_card w-[30vw] h-[30vw] bg-slate-800 rounded-xl hover:rounded-3xl hover:shadow hover:shadow-zinc-100 hover:bg-slate-950 hover:transition-all group">
        <div className="text-white py-5 px-10 flex justify-between items-center">
          <h1 className="text-3xl">{name}</h1>
          <div className="text-4xl bg-white text-black p-3 rounded-full transform transition-transform duration-300 group-hover:translate-x-2">
            <IoArrowForward />
          </div>
        </div>

        <div className="w-full px-10">
          <p>{description}</p>
        </div>

        <div className="w-full text-[10vw] flex items-center justify-center pt-10">
          {icon}
        </div>
      </div>
    </NavLink>
  );
};

export default Service_Card;