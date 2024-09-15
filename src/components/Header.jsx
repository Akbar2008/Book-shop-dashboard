import PropTypes from "prop-types";
import Search from '../../public/icon/search.svg';
import Call from '../../public/icon/call.svg';
import Down from '../../public/icon/down.svg';
import { useContext, useState } from 'react';
import { Context } from '../App';
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";
import Order from '../../public/icon/order.svg';
import { Link } from "react-router-dom";

export const Header = () => {
  const { UserData, callback, setCallback } = useContext(Context);
  const [userSettings, setUserSettings] = useState(false);


  return (
    <header className='w-full flex bg-white p-6 shadow items-center justify-between'>
      <form className='w-full flex max-w-3xl border-gray-500 border-[1px] rounded-xl p-[10px_18px]'>
        <label htmlFor="search" className='mr-2 cursor-pointer'><Search /></label>
        <input type="text" onInput={(e) => { e.target.value = e.target.value.replace(/[0-9]/g, '') }} id="search" className='w-full outline-none bg-none' placeholder='search interesting information books' />
      </form>
      <div className='flex items-center gap-3'>
        <Link to='/order' onClick={() => { setCallback(false) }} className="relative cursor-pointer mr-6">
          <Call className='mr-3' />
          <p className={callback ? "absolute z-10 text-center font-bold -top-8 -right-8  w-28 h-7 bg-blue-50 border-[1px] border-black rounded-2xl" : "hidden"}>
            sold
          </p>
          <div className={`absolute  -top-1 right-3 w-3 h-3 bg-[red] rounded-full border-[3px] border-white ${callback ? "" : "hidden"}`} />
        </Link>
        <div className="group relative">
          <p className="absolute hidden group-hover:block -top-6 -left-1 font-bold text-black ">{UserData.given_name || 'no username'}</p>
          <img src={UserData.picture || "/image/user.png"} alt="user logo" className='w-10 h-10 cursor-pointer border-[1px] border-blue-100 rounded-[50%]' />

        </div>
        <div className="relative">
          <Down className='cursor-pointer' onClick={() => { setUserSettings(!userSettings) }} />
          <div className={userSettings ? "absolute w-60  bg-white border rounded-md shadow-lg right-0 top-12 z-20" : "hidden"}>
            <Link to='/setting' className="font-bold flex gap-3 items-center cursor-pointer border-b-[1px] border-gray-700 pb-2 pl-6 pt-4 hover:bg-[green] hover:text-white"><FaUserGear className="size-5" />My profile</Link>
            <Link to='/order' className="font-bold flex gap-3 items-center cursor-pointer border-b-[1px] border-gray-700 py-2 pl-6 hover:bg-[green] hover:text-white"><Order className="size-5" /> Order</Link>
            <Link to='/login' className="font-bold flex gap-3 items-center cursor-pointer pl-6 pt-2 pb-4 text-[red] hover:text-white  hover:bg-[red]" onClick={() => { localStorage.clear() }}><MdOutlineLogin className="size-5" /> Logout</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  UserData: PropTypes.object,
  callback: PropTypes.bool,
  setCallback: PropTypes.func,
};