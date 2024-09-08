import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../../../App";
import { useContext } from "react";

export const EditCard = ({id, bookUrl, title, description, price, sales }) => {
    const { setId } = useContext(Context);

    return (
        <div className="w-80 h-96 border-2 border-gray-200 rounded-xl shadow-xl p-5">
            <img src={bookUrl} alt="" className="h-48 m-auto mb-4 bg-cover bg-no-repeat bg-center rounded-md" />
            <h3 className="mb-1 font-bold">{title}</h3>
            <p className="mb-1 font-bold">{description?.length > 25 ? description.slice(0, 25) + ' ...' : description}</p>
            <hr className="h-2" />
            <div className="flex justify-between items-center mb-2"><p className="mb-1 font-bold">Price: ${price?.toFixed(2)}</p>
                <p className="mb-1 font-bold">Sales: {sales}</p></div>
            <div className="flex gap-2">
                <button onClick={()=>{setId(id)}} className="h-10 w-full rounded-xl bg-[red] font-bold text-white">
                    delete</button>
                <Link to={`/update/${id}`}  className="grid place-content-center h-10 w-full rounded-xl bg-[green] font-bold text-white">
                    Edit</Link>

            </div>
        </div>
    )
}
EditCard.propTypes = {
    id: PropTypes.number,
    bookUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    sales: PropTypes.number,
    // setUpdate: PropTypes.func,
    seIid: PropTypes.func,
};