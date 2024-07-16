import { Link } from "react-router-dom";

const Card = (props) => {
    const { id, title, image, description, instructions, ingredients } =
        props.recipe;

    return (
        <Link
            to={`/recipes/${id}`}
            className="mr-[3.3%] ml-[1%] mb-[3%] bg-white overflow-hidden object-cover  text-center w-[28%]  p-5 shadow-lg hover:scale-[1.02] duration-200"
        >
            <img className="w-[80%] h-[50%] ml-5 mt-[-5%] bg-white  object-contain overflow-hidden"  src={image} alt={title} />
            <h1 className="mt-5 mb-3 text-xl text-semibold">{title}</h1>
            <p>{description.slice(0, 100)}...</p>
            <div className="flex justify-between overflow-hidden object-cover  text-zinc-400 mt-5 ">
                <p className="text-center ">
                    <i className="ri-timer-line text-green-500"></i>
                    <br />
                    <span className="text-sm text-green-500">20min</span>
                </p>
                <p className="text-center">
                    <i className="ri-thumb-up-line text-green-500"></i>
                    <br />
                    <span className="text-sm text-green-500">Easy</span>
                </p>
                <p className="text-center">
                    <i className="ri-share-line text-green-500"></i>
                    <br />
                    <span className="text-sm text-green-500">Share</span>
                </p>
            </div>
        </Link>
    );
};

export default Card;