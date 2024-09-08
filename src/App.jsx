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
export function App() {

  const [UserData, setUserData] = useState(JSON.parse(localStorage.getItem("UserData")) || false);
  const [NewBook, setNewBook] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState();

  localStorage.setItem('token', JSON.stringify(UserData.jti));
  localStorage.setItem('UserData', JSON.stringify(UserData));

  useEffect(() => {
    axios.get('https://603307912be88716.mokky.dev/books')
      .then(({ data }) => { setData(data) })
      .catch((err) => { console.log(err) });
  }, []);


  useEffect(() => {
    setData((data) => data.filter((item) => item.id != id))
    axios.delete(`https://603307912be88716.mokky.dev/books/${id}`);
  }, [id]);
  
  return (
    <Context.Provider value={{ data, NewBook, setNewBook, UserData, setUserData, edit, setEdit, setId }}>
      <ModalNewBook />
      <div className="flex w-screen max-h-screen items-start">
        <MenuList />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/login" element={<Login />} />
              <Route index element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/order" element={<Order />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/update?/:id" element={<Update />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Context.Provider>
  )
}
