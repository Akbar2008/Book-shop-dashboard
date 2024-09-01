import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";
import { Order } from "./Pages/Order";
import { Setting } from "./Pages/Setting";
import { MenuList } from "./components/Menu-list";
import { Layout } from "./components/Layout";
import { Error404 } from "./components/assets/Error404";
import { createContext, useEffect, useState } from "react";
export const Context = createContext(null);
import axios from "axios";
import { ModalNewBook } from "./components/assets/Modal-NewBook";
import { Login } from "./components/assets/Login";
export function App() {
  const [NewBook, setNewBook] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://66d1a89362816af9a4f47003.mockapi.io/items').then(({ data }) => { setData(data) });
  }, []);
  return (
    <>
      <Context.Provider value={{ data, NewBook, setNewBook }}>
      <ModalNewBook />
      <Login/>
        <div className="flex w-screen max-h-screen items-start">
          <MenuList />
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/order" element={<Order />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="*" element={<Error404 />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Context.Provider>
    </>
  )
}
