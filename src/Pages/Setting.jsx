import { useContext } from "react"
import { Context } from "../App"
import { Link } from "react-router-dom";
import { FaEnvira } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

export const Setting = () => {
    const { UserData } = useContext(Context);
    const GoogleTextColor = [
        { letter: 'G', color: 'text-[#4285F4]' },
        { letter: 'o', color: 'text-[#DB4437]' },
        { letter: 'o', color: 'text-[#F4B400]' },
        { letter: 'g', color: 'text-[#0F9D58]' },
        { letter: 'l', color: 'text-[#4285F4]' },
        { letter: 'e', color: 'text-[#DB4437]' },
      ];
    return (
        <main className="w-full h-[87vh] p-10 pb-0 overflow-auto flex items-center">
           <div className="w-full m-auto flex justify-around items-center">
           { localStorage.getItem('token') == "undefined" ?
            <Link to='/login' className="group hover:bg-green-800 select-none relative flex h-14 w-72 m-auto rounded-xl border-2 border-green-900 font-bold items-center justify-center  text-white">
            {GoogleTextColor.map((items, i) => {
              const { letter, color } = items;
              return (
                <h1 key={i} className={color + " text-2xl"}>{letter}</h1>
              )
            })}
            <FaEnvira className="group-hover:text-white text-green-900 ml-2 transition duration-300 group-hover:opacity-0" />
            <IoArrowForward className="group-hover:text-white text-green-900 -rotate-45 transition duration-300 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2" />
          </Link>
          :
            <>
            <img src={UserData.picture || "/image/Error.png"} alt="user picture" className="size-60 rounded-full border-[1px] border-blue-2  00" />
                <div className="font-bold text-xl">
                    <h1 className="font-bold text-2xl mb-1 text-gray-600">Name: <span className="ml-1 text-black hover:underline">{UserData.given_name || 'no username'}</span></h1>
                    <p className="text-gray-600 mb-1">Email: <span className="ml-1 text-black hover:underline">{UserData.email || 'no email'}</span></p>
                    <p className="text-gray-600">User id: <span className="ml-1 text-black hover:underline">{UserData.exp || 'no phone number'}</span></p>
                </div>
            </>
                }
           </div>
        </main>
    )
}
