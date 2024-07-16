import React from "react";
import Order from "./Order"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="w-full flex justify-between items-center  h-[60vh]">
            <div className="left w-1/2 ">
                <h1 className="text-6xl mt-10 font-extrabold text-orange-400">
                    SAGAR GAIRE FAST FOOD CORNER
                </h1>
                <p className="text-zinc-400 mt-3 mb-10">
                Sagar Gaire Fast Food Corner Fast Food Corner is fastest growing fast food chain restaurant in central India,in city of lakes, Bhopal (MP). The team is consistently working hard to delight its customer with fresh and most authentic food that is served ever. The Ambiance is pretty decent and full of pleasant people in a lively environment.
                </p>
                <button className=" bg-orange-500 text-white py-2 px-5 hover: bg-green-500 duration-200"><Link className="hover:text-zinc-900 duration-200" to="/order">
                Order Now &nbsp; &#8594;
                </Link>
                </button>
            </div>
            <img
                className="w-1/2"
                src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                alt=""
            />
    
        </div>
        
    );
};

export default Home;
