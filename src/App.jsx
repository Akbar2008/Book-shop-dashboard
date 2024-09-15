import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";
import { Order } from "./Pages/Order";
import { Setting } from "./Pages/Setting";
import { MenuList } from "./components/Menu-list";
import { Layout } from "./components/Layout";
import { Error404 } from "./components/shared/Error404";
import { createContext, useEffect, useState } from "react";
export const Context = createContext(null);
import axios from "axios";
import { ModalNewBook } from "./components/shared/Modal-NewBook";
import { Login } from "./components/shared/Login";
import { Update } from "./components/shared/Update";
import { BuyCard } from "./components/shared/BuyCard";
export function App() {

  const [UserData, setUserData] = useState(JSON.parse(localStorage.getItem("UserData")) || false);
  const [NewBook, setNewBook] = useState(false);
  const [edit, setEdit] = useState(false);
  const [buyCard, setBuyCard] = useState(false);
  const [data, setData] = useState([]);
  const [getOrder, setGetOrder] = useState([]);
  const [callback, setCallback] = useState(JSON.parse(localStorage.getItem("callback")) || false)
  const [id, setId] = useState();
  const [dataInfo, setDataInfo] = useState();
  const [buyApi, setBuyApi] = useState({ buyId: 0, buyUrl: '', buyTitle: '', buyDescription: '', buyPrice: 0, buySelect: '',buySales: 0 });
  const [values, setValues] = useState({
    id: id,
    title: '',
    description: '',
    url: '',
    price: '',
    select: '',
  });

  localStorage.setItem('token', JSON.stringify(UserData.jti));
  localStorage.setItem('UserData', JSON.stringify(UserData));
  localStorage.setItem('callback', JSON.stringify(callback));


  function Fetch() {
    axios.get('book')
      .then(({ data }) => { setData(data) })
      .catch((err) => { console.log(err) });
  }
  useEffect(() => {
    Fetch()
  }, [])

  useEffect(() => {
    setData((data) => data.filter((item) => item.id != id))
    axios.delete(`book/${id}`);
  }, [id]);

  function SoldOrder() {
    axios.get('https://603307912be88716.mokky.dev/orders')
      .then(({ data }) => { setGetOrder(data) })
      .catch((err) => { console.log(err) });
  }
  useEffect(() => {
    SoldOrder()
  }, [])



  return (
    <Context.Provider value={{ data, NewBook, setNewBook, UserData, setUserData, edit, setEdit, setId, dataInfo, setDataInfo, values, setValues, setData, Fetch, buyCard, setBuyCard, buyApi, setBuyApi, callback, setCallback, getOrder, SoldOrder }}>
      <ModalNewBook />
      <BuyCard />
      <div className="flex w-screen max-h-screen items-start">
        <MenuList />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/order" element={<Order />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/login" element={<Login />} />
              <Route path="/update?/:id" element={<Update />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Context.Provider>
  )
}
