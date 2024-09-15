/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../../App";

export const Update = () => {
    const { values, setValues, setData, Fetch } = useContext(Context);

    const { id } = useParams();
    const navigate = useNavigate();
    const [option, setOption] = useState([]);
    useEffect(() => {
        axios.get(`book/${id}`).then(({ data }) => {
            setValues({ ...values, title: data.title, description: data.description, url: data.url, price: data.price, select: data.select});
            setOption([{ value: data.select, option: data.select }, { value: data.select == "Paid" ? "Draft" : "Paid", option: data.select == "Paid" ? "Draft" : "Paid" }])
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`book/${id}`, values)
            .then(() => {
                setData((data) => data.filter((item) => item.id == id))
                navigate('/product')
            })
            .catch(err => console.log(err)).finally(()=>{Fetch()});
    } 
    
    return (

        <main className={`flex items-center w-full h-screen fixed ${id.length > 1 ? "bg-[rgba(0,0,0,1)]" : "bg-[rgba(0,0,0,0.4)]"} z-10 top-0 left-0`}>
            {id.length > 1 ? <Link to='/' className="m-auto font-bold text-8xl text-[red] flex items-center">Is not found Card Id <img src="/image/Error.png" alt="Error icon" className="size-72" /></Link> : <div className="m-auto w-[400px] max-h-[780px] bg-black rounded-2xl p-7">
                <p className="text-right font-bold text-white text-2xl cursor-pointer mb-2" onClick={() => { navigate('/product') }}>X</p>
                <h1 className="font-bold text-white text-center mb-4 text-2xl">Update your book</h1>
                <hr className="mb-3" />
                <form className="flex flex-col gap-5 font-bold text-white" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="UpdateTitle">Update title</label>
                        <input type="text" id="UpdateTitle" className="bg-none rounded border-2 outline-none p-3 border-white"
                            value={values.title} onChange={(e) => { setValues({ ...values, title: e.target.value }) }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description">Update description</label>
                        <textarea id="description" className="bg-none rounded border-2 border-white outline-none p-3" value={values.description}
                            onChange={(e) => { setValues({ ...values, description: e.target.value }) }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="url" >Update url</label>
                        <input type="text" id="url" className="bg-none rounded border-2 border-white outline-none p-3" value={values.url}
                            onChange={(e) => { setValues({ ...values, url: e.target.value }) }}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="price">Update price</label>
                        <input type="number" id="price" className="bg-none rounded border-2 border-white outline-none p-3" value={values.price}
                            onChange={(e) => { setValues({ ...values, price: e.target.value }) }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="select">Status</label>
                        <select id="select" onClick={(e)=>{setValues({ ...values, select: e.target.value })}} className="mb-3 text-white bg-none p-2 border-[1px] border-white rounded-xl">
                            {option.map((item, i) => {
                                return (
                                    <option key={i} value={item.value} className="bg-none text-black">{item.option}</option>
                                )
                            })
                            }
                        </select>
                    </div>
                    <button className="py-3 rounded-xl bg-white bg-[url('../../../public/icon/Cover.svg')] bg-cover bg-center bg-no-repeat text-black">Create</button>
                </form>
            </div>}
        </main>
    )
}
Update.propTypes = {
    values: PropTypes.object,
    setValues: PropTypes.func,
    setData: PropTypes.func,
    Fetch: PropTypes.func,
};