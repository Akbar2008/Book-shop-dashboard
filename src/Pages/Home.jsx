import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../App";
import { Card } from "../components/shared/Cards/Card";

export const Home = () => {
  const { data } = useContext(Context);

  return (
    <main className={data.length < 1 ? "-full h-[87vh] flex items-center" : "grid w-full h-[87vh] p-10 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-9 overflow-auto"}>
      {data.length < 1 ? 
      <p className="m-auto font-bold text-4xl text-[red] flex items-center gap-3">Books for sale are not available yet <img src="/image/sad.png" alt="sad" /></p> :
      data.map((items) => {
        const { id, url, title, description, price, sales, select } = items;
        return (
          <Card  key={parseInt(id)} id={parseInt(id)} url={url} title={title} description={description} price={price} sales={sales} select={select} />
        )
      })}
    </main>
  )
}
Home.propTypes = {
  data: PropTypes.object,
};