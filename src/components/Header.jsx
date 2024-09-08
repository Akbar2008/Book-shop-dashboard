import PropTypes from "prop-types";
import Search from '../../public/icon/search.svg';
import Call from '../../public/icon/call.svg';
import Down from '../../public/icon/down.svg';
import { useContext, useState } from 'react';
import { Context } from '../App';
import { FaUserGear } from "react-icons/fa6";
import { MdOutlineLogin } from "react-icons/md";


export const Header = () => {
  const { UserData } = useContext(Context);
  const [userSettings, setUserSettings] = useState(false);
  console.log(userSettings);
  
  return (
    <header className='w-full flex bg-white p-6 shadow items-center justify-between'>
        <form className='flex max-w-3xl border-gray-500 border-[1px] rounded-xl p-[10px_18px]'> 
          <label htmlFor="search" className='mr-2 cursor-pointer'><Search/></label>
          <input type="text" onInput={(e)=>{e.target.value = e.target.value.replace(/[0-9]/g, '')}} id="search" className='w-screen outline-none bg-none' placeholder='search interesting information books'/>
        </form>
        <div className='flex items-center gap-3'>
          <Call className='mr-3 cursor-pointer'/>
          <div className="relative">
            <img src={UserData.picture || "/image/user.png"} alt="user logo" className='w-10 h-10 cursor-pointer border-[1px] border-blue-100 rounded-[50%]'  onClick={()=>{setUserSettings(!userSettings)}}/>
          <div className={userSettings ? "absolute w-60  bg-white border rounded-md shadow-lg right-0 top-12 z-10" : "hidden"}>
          <p className="font-bold flex gap-3 items-center cursor-pointer border-b-[1px] border-gray-700 pb-2 pl-6 pt-4 hover:bg-[green] hover:text-white"><FaUserGear className="size-5"/>My profile</p>
          <p className="font-bold flex gap-3 items-center cursor-pointer border-b-[1px] border-gray-700 py-2 pl-6 hover:bg-[green] hover:text-white"><FaUserGear className="size-5"/> Order</p>
          <p className="font-bold flex gap-3 items-center cursor-pointer pl-6 pt-2 pb-4 text-[red] hover:text-white  hover:bg-[red]" onClick={()=>{localStorage.clear()}}><MdOutlineLogin className="size-5"/> Logout</p>
          </div>
          </div>
          <Down className='cursor-pointer'/>
        </div>
    </header>
  )
}
Header.propTypes = {
  UserData: PropTypes.object,
};