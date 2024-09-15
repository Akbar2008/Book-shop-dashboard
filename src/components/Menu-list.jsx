import PropTypes from "prop-types";
import { Link, NavLink } from 'react-router-dom';
import Book from '../../public/icon/BookLogo.svg';
import Home from '../../public/icon/home.svg';
import Literate from '../../public/icon/literate.svg';
import Order from '../../public/icon/order.svg';
import Setting from '../../public/icon/setting.svg';
import { useContext } from 'react';
import { Context } from '../App';

export const MenuList = () => {
  const {setCallback} = useContext(Context);
  return (
    <section className="w-96 p-[30px_15px] bg-white min-h-screen flex items-center flex-col shadow-lg">
      <Link to="" className='flex items-center cursor-pointer mb-12'>
        <Book className='size-12 mr-6' />
        <h1 className='uppercase font-bold text-3xl select-none'> Store</h1>
      </Link>
      <ul className='flex flex-col gap-10 px-9 mr-auto'>
        <NavLink to=''><li className='flex items-center gap-6'><Home /><b>Home</b></li></NavLink>
        <NavLink to='/product'><li className='flex items-center gap-6'><Literate /><b>Products</b></li></NavLink>
        <NavLink to='/order' onClick={()=>{setCallback(false)}} ><li className='flex items-center gap-6'><Order /><b>Order</b></li></NavLink>
        <NavLink to='/setting'><li className='flex items-center gap-6'><Setting /><b>Setting</b></li></NavLink>
      </ul>
    </section>
  )
}
MenuList.propTypes = {
  setCallback: PropTypes.func,
};