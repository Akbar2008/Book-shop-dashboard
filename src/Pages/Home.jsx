import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../App";
import { Card } from "../components/shared/Cards/Card";

export const Home = () => {
  const { data } = useContext(Context);

  return (
    <main className="grid w-full h-[87vh] p-10 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-9 overflow-auto">
      {data.map((items) => {
        const { id, bookUrl, title, description, price, sales } = items;
        return (
          <Card  key={parseInt(id)} id={parseInt(id)} bookUrl={bookUrl} title={title} description={description} price={price} sales={sales} />
        )
      })}
    </main>
  )
}
Home.propTypes = {
  data: PropTypes.object,
};