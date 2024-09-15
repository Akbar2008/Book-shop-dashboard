import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../App";
import { useContext } from "react";

export const EditCard = ({ id, url, title, description, price, sales, select }) => {
    const { setId } = useContext(Context);
    const navigation = useNavigate();
    return (
        <div className="w-80 h-96 border-2 border-gray-200 rounded-xl shadow-xl p-5">
            <div className="relative">
                <p className={`absolute right-0 rounded-2xl bottom-0 py-1 px-5 font-bold text-white ${select == "Paid" || select == "paid" ? "bg-[green]" : "bg-[gray]"}`}>{select}</p>
                <img src={url || '/image/defaultImg.png'} alt="" className="h-48 m-auto mb-4 bg-cover bg-no-repeat bg-center rounded-md" />
            </div>
            <h3 className="mb-1 font-bold">{title.length > 20 ? title.slice(0, 20) + ' ...' : title || 'not'}</h3>
            <p className="mb-1 font-bold">{description.length > 20 ? description.slice(0, 20) + ' ...' : description || 'not'}</p>
            <hr className="h-2" />
            <div className="flex justify-between items-center mb-2"><p className="mb-1 font-bold">Price: ${price || 'not'}</p>
                <p className="mb-1 font-bold">Sales: {sales || '0'}</p></div>
            <div className="flex gap-2">
                <button onClick={() => { localStorage.getItem('token') != "undefined" ? setId(id) : navigation('/login') }} className="h-10 w-full rounded-xl bg-[red] font-bold text-white">
                    delete</button>
                <Link to={localStorage.getItem('token') != "undefined" ? `/update/${id}` : navigation('/login')} className="grid place-content-center h-10 w-full rounded-xl bg-[green] font-bold text-white">
                    Edit</Link>
            </div>
        </div>
    )
}
EditCard.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    sales: PropTypes.number,
    seIid: PropTypes.func,
    select: PropTypes.string,
};