/* eslint-disable react-hooks/exhaustive-deps */

import PropTypes from "prop-types";
import { useContext, useState } from 'react';
import CardIcon from '../../../public/icon/card.svg'
import { IoArrowForward } from "react-icons/io5";
import { Context } from '../../App';
import axios from "axios";

export const BuyCard = () => {
  const { buyCard, setBuyCard, buyApi, UserData, setCallback, SoldOrder, setProductSold } = useContext(Context);
  const { buyUrl, buyTitle, buyDescription, buyPrice, buySelect } = buyApi;
  const [count, setCount] = useState(1);
  const result = count * parseInt(buyPrice);

  const currentDate = new Date();
  const data = JSON.stringify(currentDate);

  function OrderPost() {
    axios.post('orders', { url: buyUrl, title: buyTitle, userPicture: UserData.picture, userEmail: UserData.email, price: count * parseInt(buyPrice), data: data, select: buySelect }).then().catch((error) => { console.log(error) }).finally(() => { SoldOrder() });
  }


  return (
    <div className={buyCard ? "fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.3)] z-50 flex items-center" : "hidden"}>
      <main className="m-auto rounded-xl bg-black w-[600px] text-white font-bold pb-6 relative">
        <p onClick={() => { setBuyCard(false) }} className="absolute top-4 right-6 text-[red] text-2xl cursor-pointer">X</p>
        <img src={buyUrl || '/image/defaultImg.png'} alt="" className="h-72 m-auto mb-5" />
        <p className="text-center px-4">{buyTitle || "butApi.title"}</p>
        <p className="text-center mb-6 px-6">{buyDescription || "butApi.description"}</p>
        <div className="flex items-center justify-between px-8 mb-6 select-none">
          <div className="flex gap-3 items-center">
            <button className="px-4 py-1 bg-[red] rounded-2xl" onClick={() => { setCount(count > 1 ? count - 1 : 1) }}>-</button>
            <p>{count}</p>
            <button className="px-4 py-1 bg-[green] rounded-2xl" onClick={() => { setCount(count + 1) }}>+</button>
          </div>
          <h1>{result?.toFixed(2)} $</h1>
        </div>
        <div className='px-14' onClick={() => { setBuyCard(false), setProductSold(count) }}>
          <button onClick={() => {
            setCallback(true), OrderPost()
          }}
            className="group select-none relative flex h-14 w-full rounded-xl bg-green-600 font-bold items-center justify-center  text-white">
            <CardIcon className="transition duration-300 group-hover:opacity-0" />
            <IoArrowForward className="transition duration-300 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2" />
            Buy</button>
        </div>
      </main>
    </div>
  )
}
BuyCard.propTypes = {
  buyCard: PropTypes.bool,
  setBuyCard: PropTypes.func,
  buyApi: PropTypes.object,
  UserData: PropTypes.object,
  setCallback: PropTypes.func,
  SoldOrder: PropTypes.func,
  setProductSold: PropTypes.func,
};