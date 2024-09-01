import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { PiLessThanOrEqualDuotone } from "react-icons/pi";
import { Context } from "../../App";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const ModalNewBook = () => {
    const { NewBook, setNewBook } = useContext(Context);
    const [dataInfo, setDataInfo] = useState();
    
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => setDataInfo(data);
    const BtnRef = useRef();
    // useEffect(() => {
    //     axios.post('https://66d1a89362816af9a4f47003.mockapi.io/items', dataInfo);
    //   }, []);

    return (
        <section className={NewBook ? "flex items-center fixed w-full h-screen bg-[rgba(0,0,0,0.3)] z-10 top-0 left-0" : "hidden"}>
            <div className="m-auto w-[400px] max-h-[700px] bg-black rounded-2xl p-7">
                <p className="text-right font-bold text-white text-2xl cursor-pointer mb-2" onClick={() => { setNewBook(false) }}>X</p>
                <div className="text-white font-bold flex gap-2 items-center shadow-2xl shadow-white">
                    <img src="/image/tenor-unscreen.gif" alt="Telegram duck" className="w-14" />
                    <p>place yourself in your books</p>
                </div>
                <hr className="mb-3" />
                <form className="flex flex-col gap-5 font-bold text-white" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className={errors.title?.type ? "text-[red] flex gap-1" : ""}>Title
                            <div className={errors.title?.type ? "flex gap-1 text-[red]" : "hidden"}><p>is not found</p>  <img src="/image/Error.png" alt="Error icon" className="h-6" /></div></label>
                        <input type="text" id="title" className="bg-none rounded border-2 outline-none p-3 border-white"
                            {...register("title", { required: true, minLength: 3, })} aria-invalid={errors.title ? "true" : "false"} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className={errors.description?.type ? "text-[red] flex gap-1" : ""}>Description
                            <div className={errors.description?.type ? "flex gap-1 text-[red]" : "hidden"}><p>is not found</p>  <img src="/image/Error.png" alt="Error icon" className="h-6" /></div></label>
                        <textarea id="description" className="bg-none rounded border-2 border-white outline-none p-3" {...register("description", { required: true, minLength: 10, })} aria-invalid={errors.description ? "true" : "false"} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="url" className={errors.url?.type ? "text-[red] flex gap-1" : ""}>Url
                            <div className={errors.url?.type ? "flex gap-1 text-[red]" : "hidden"}><p>is not found</p>  <img src="/image/Error.png" alt="Error icon" className="h-6" /></div></label>
                        <input type="text" id="url" className="bg-none rounded border-2 border-white outline-none p-3" {...register("url", { required: true, minLength: 15, })} aria-invalid={errors.url ? "true" : "false"} />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="price" className={errors.price?.type ? "text-[red] flex gap-1" : ""}>Price
                            <div className={errors.price?.type ? "flex gap-1 text-[red]" : "hidden"}><p className="flex gap-1 items-center">is not found: 5$<PiLessThanOrEqualDuotone /></p>  <img src="/image/Error.png" alt="Error icon" className="h-6" /></div></label>
                        <input type="number" id="price" className="bg-none rounded border-2 border-white outline-none p-3" {...register("price", { required: true, min: 5, })} aria-invalid={errors.price ? "true" : "false"} />
                    </div>
                    <button  ref={BtnRef} onClick={dataInfo && setNewBook(false)} className="py-3 rounded-xl bg-white bg-[url('../../../public/icon/Cover.svg')] bg-cover bg-center bg-no-repeat text-black">Create</button>
                </form>
            </div>
        </section>
    )
}
ModalNewBook.propTypes = {
    NewBook: PropTypes.bool,
    setNewBook: PropTypes.func,
};