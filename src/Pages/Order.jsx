import PropTypes from "prop-types";
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Context } from "../App";
import { FaEnvira } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Order = () => {
  const months = { "01": 'January', "02": 'February', "03": 'March', "04": 'April', "05": 'May', "06": 'June', "07": 'July', "08": 'August', "09": 'September', "10": 'October', "11": 'November', "12": 'December' };
  const currentDate = new Date();
  const date = JSON.stringify(currentDate);
  const { getOrder } = useContext(Context);

  const GoogleTextColor = [
    { letter: 'G', color: 'text-[#4285F4]' },
    { letter: 'o', color: 'text-[#DB4437]' },
    { letter: 'o', color: 'text-[#F4B400]' },
    { letter: 'g', color: 'text-[#0F9D58]' },
    { letter: 'l', color: 'text-[#4285F4]' },
    { letter: 'e', color: 'text-[#DB4437]' },
  ];

  return (
    <main className="w-full h-[87vh] p-10 pb-0 overflow-auto">
      <div className="w-full flex items-center justify-between mb-8">
        <h1 className="font-bold text-3xl">Order {getOrder.length}</h1>
        <div className="flex items-center gap-4"><p className="bg-slate-200 px-3 py-1 font-bold rounded-md">All time</p>
          <p className="font-semibold">{months[date.slice(6, 8)] + " " + date.slice(9, 11) + " " + date.slice(1, 5)}</p></div>
      </div>
      <div className="w-full  shadow shadow-[#000000] rounded pt-8">
        <div className=" flex items-center px-10 pb-3">
          <label htmlFor="userSearch"><FiSearch className="size-5 cursor-pointer mr-5" /></label>
          <input type="text" id="userSearch" className="w-full outline-none" placeholder="Search..." />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(20%,_1fr))] py-3 px-4 border-t-[1px] border-gray-800 bg-[#ededed]">
          <p className="font-bold text-center">Product</p>
          <p className="font-bold text-center">User</p>
          <p className="font-bold text-center -mr-36">Price</p>
          <p className="font-bold text-center">Purchase Data</p>
          <p className="font-bold text-center">Status</p>
        </div>
        <div className="flex flex-col">
          {localStorage.getItem('token') != "undefined" ?
              getOrder.map((items)=>{
              const {id, url, title, userPicture, userEmail, price, data, select} = items;
              return(
                <div key={id} className="grid grid-cols-[repeat(auto-fill,_minmax(18%,_1fr))] gap-5 py-3 px-4 border-t-[1px] border-gray-800">
                <div className="flex items-center gap-3">
                  <img src={url} alt={title.slice(0, 3)} className="w-10 border-blue-400 border-[1px]" />
                  <p>{title.length > 15 ? title.slice(0, 15) + " ..." : title}</p>
                </div>
                <div className="flex items-center gap-6 ">
                  <img src={userPicture} alt="" className="w-11 rounded-full" />
                  <p>{userEmail}</p>
                </div>
                <p className="m-auto font-bold mr-3">{price} $</p>
                <p className="m-auto">{months[data.slice(6, 8)] + " " + data.slice(9, 11) + " " + data.slice(1, 5)}</p>
                <p className={`m-auto font-bold ${select == "Paid" ? "text-[green]" : "text-[gray]"}`}><button className={`${select == "Paid" ? "button" : "btnDraft"} mr-7`} /> {select}</p>
              </div>

              )
            })
            : 
            <div className="h-40 bg-[rgba(0,0,0,9)] flex items-center">
              <Link to='/login' className="group select-none relative flex h-14 w-72 m-auto rounded-xl bg-green-900 font-bold items-center justify-center  text-white">
                {GoogleTextColor.map((items, i) => {
                  const { letter, color } = items;
                  return (
                    <h1 key={i} className={color + " text-2xl"}>{letter}</h1>
                  )
                })}
                <FaEnvira className="text-white ml-2 transition duration-300 group-hover:opacity-0" />
                <IoArrowForward className="-rotate-45 transition duration-300 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2" />
              </Link>
            </div>
          }
        </div>
      </div>
    </main>
  )
}
Order.propTypes = {
  getOrder: PropTypes.object,
};