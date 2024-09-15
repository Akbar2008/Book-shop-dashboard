import PropTypes from "prop-types";
import { LuPlus } from "react-icons/lu";
import { Context } from "../App";
import { useContext } from "react";
import { EditCard } from "../components/shared/Cards/EditCard";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const { data, setNewBook } = useContext(Context);
  const navigate = useNavigate();
  return (
    <main className={data.length < 1 ? "-full h-[87vh] flex items-center" : "grid w-full h-[87vh] p-10 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] relative gap-10 overflow-auto" }>
      <button onClick={() => {localStorage.getItem('token') != "undefined" ? setNewBook(true) : navigate('/login')}} className="fixed p-[15px_25px] rounded-xl bg-green-600 text-white font-bold flex items-center gap-2 top-28 right-10 shadow-lg z-10"><LuPlus /> New Add Books
      </button>
      {data.length < 1 ? 
      <p className="m-auto font-bold text-4xl text-[red] flex items-center gap-3">The admin has not yet put the books on sale <img src="/image/sad.png" alt="sad" /></p> :
      data.map((items) => {
        const { id, url, title, description, price, sales, select } = items;
        return (
          <EditCard key={parseInt(id)} id={parseInt(id)} url={url} title={title} description={description} price={price} sales={sales}  select={select}/>
        )
      })}
    </main>
  )
}
Product.propTypes = {
  data: PropTypes.object,
  setNewBook: PropTypes.func,
};