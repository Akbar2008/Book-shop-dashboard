import PropTypes from "prop-types";
import { LuPlus } from "react-icons/lu";
import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { EditCard } from "../components/assets/Cards/EditCard";
import axios from "axios";

export const Product = () => {
  const { data, setNewBook } = useContext(Context);
  const [EditCardId, setEditCardId] = useState();
  // useEffect(() => {
  //   axios.delete("https://d38686458ba89a5d.mokky.dev/notifications/" + EditCardId);
  // }, []);
console.log(EditCardId);

  return (
    <main className="grid w-full h-[87vh] p-10 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] relative gap-10 overflow-auto">
      <button onClick={() => { setNewBook(true) }} className="absolute p-[15px_25px] rounded-xl bg-green-600 text-white font-bold flex items-center gap-2 top-7 right-5 shadow-lg"><LuPlus /> New Add Books
      </button>
      {data.map((items) => {
        const { id, bookUrl, title, description, price, sales } = items;
        return (
          <EditCard key={parseInt(id)} id={parseInt(id)} bookUrl={bookUrl} title={title} description={description} price={price} sales={sales} setEditCardId={setEditCardId} />
        )
      })}
    </main>
  )
}
Product.propTypes = {
  data: PropTypes.object,
  setNewBook: PropTypes.func,
};