import PropTypes from "prop-types";
import CardIcon from '../../../../public/icon/card.svg'
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../App";
export const Card = ({id, url, title, description, price, sales, select}) => {
  const { setBuyCard, setBuyApi } = useContext(Context); 
  const navigate = useNavigate();

  return (
    <div className="w-72 h-96 border-2 border-gray-200 rounded-xl shadow-xl p-5">
      <div className="relative">
      <p className={`absolute right-0 rounded-2xl bottom-0 py-1 px-5 font-bold text-white ${select == "Paid" || select == "paid" ? "bg-[green]" : "bg-[gray]"}`}>{select}</p>
      <img src={url || '/image/defaultImg.png'} alt="" className="h-48 m-auto mb-4 bg-cover bg-no-repeat bg-center rounded-md" />
      </div>
      <h3 className="mb-1 font-bold">{title.length > 20 ? title.slice(0, 20) + ' ...' : title || 'not'}</h3>
      <p className="mb-1 font-bold">{description.length > 20 ? description.slice(0, 20) + ' ...' : description || 'not'}</p>
      <hr className="h-2" />
      <div className="flex justify-between items-center mb-2"><p className="mb-1 font-bold">Price: ${price || 'not'}</p>
        <p className="mb-1 font-bold">Sales: {sales || '0'}</p></div>
      <div onClick={()=>{setBuyApi({buyId: id, buyUrl: url, buyTitle: title, buyDescription: description, buyPrice: price, buySelect: select, buySales: sales})}}>
      <button onClick={() => { localStorage.getItem('token') != "undefined" ? setBuyCard(true)  : navigate('/login')}}
      className="group relative flex h-10 w-full rounded-xl bg-green-600 font-bold items-center justify-center  text-white">
        <CardIcon className="transition duration-300 group-hover:opacity-0" /> 
        <IoArrowForward className="transition duration-300 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2" /> 
        Buy</button>
      </div>
    </div>
  )
}
Card.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  sales: PropTypes.number,
  select: PropTypes.string,
  setBuyCard: PropTypes.func,
  setBuyApi: PropTypes.func,
  setStatCount: PropTypes.func,
};