/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const titleRef = useRef("nimadur");
    const descriptionRef = useRef("");
    const bookUrlRef = useRef("");
    const priceRef = useRef(0);

    const values = {
        id: id,
        title: titleRef.current,
        description: descriptionRef.current,
        bookUrl: bookUrlRef.current,
        price: priceRef.current
    }
    console.log(values.title.value);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://603307912be88716.mokky.dev/books/${id}`, values)
            .then((res) => {
                navigate('/product')
            })
            .catch(err => console.log(err));
    }
    return (

        <main className="flex items-center w-full h-screen fixed bg-[rgba(0,0,0,0.4)] z-10 top-0 left-0">
            <div className="m-auto w-[400px] max-h-[700px] bg-black rounded-2xl p-7">
                <p className="text-right font-bold text-white text-2xl cursor-pointer mb-2" onClick={() => { navigate('/product') }}>X</p>
                <h1 className="font-bold text-white text-center mb-4 text-2xl">Update your book</h1>
                <hr className="mb-3" />
                <form className="flex flex-col gap-5 font-bold text-white" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="UpdateTitle">Update title</label>
                        <input type="text" id="UpdateTitle" className="bg-none rounded border-2 outline-none p-3 border-white"
                            ref={titleRef}
                            value={values.title}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description">Update description</label>
                        <textarea id="description" className="bg-none rounded border-2 border-white outline-none p-3" ref={descriptionRef}
                            value={values.description} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="url" >Update url</label>
                        <input type="text" id="url" className="bg-none rounded border-2 border-white outline-none p-3" ref={bookUrlRef}
                            value={values.bookUrl} />
                    </div>
                    <div className="flex flex-col gap-2 mb-3">
                        <label htmlFor="price">Update price</label>
                        <input type="number" id="price" className="bg-none rounded border-2 border-white outline-none p-3" ref={priceRef}
                            value={values.price} />
                    </div>
                    <button className="py-3 rounded-xl bg-white bg-[url('../../../public/icon/Cover.svg')] bg-cover bg-center bg-no-repeat text-black">Create</button>
                </form>
            </div>
        </main>
    )
}