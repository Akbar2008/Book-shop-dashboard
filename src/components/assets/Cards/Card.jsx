import PropTypes from "prop-types";
import CardIcon from '../../../../public/icon/card.svg'
import { IoArrowForward } from "react-icons/io5";
export const Card = ({ id, bookUrl, title, description, price, sales }) => {
  return (
    <div className="w-72 h-96 border-2 border-gray-200 rounded-xl shadow-xl p-5 relative">
      <p className="absolute top-3 left-3 font-bold text-black">{id}</p>
      <img src={bookUrl || '/image/defaultImg.png'} alt="" className="h-48 m-auto mb-4 bg-cover bg-no-repeat bg-center rounded-md" />
      <h3 className="mb-1 font-bold">{title}</h3>
      <p className="mb-1 font-bold">{description?.length > 25 ? description.slice(0, 25) + ' ...' : description}</p>
      <hr className="h-2" />
      <div className="flex justify-between items-center mb-2"><p className="mb-1 font-bold">Price: ${price?.toFixed(2)}</p>
        <p className="mb-1 font-bold">Sales: {sales}</p></div>
      <button className="group relative flex h-10 w-full rounded-xl bg-green-600 font-bold items-center justify-center  text-white">
        <CardIcon className="transition duration-300 group-hover:opacity-0" />
        <IoArrowForward className="transition duration-300 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2" />
        Buy</button>
    </div>
  )
}
Card.propTypes = {
  id: PropTypes.number,
  bookUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  sales: PropTypes.number,
};