import PropTypes from "prop-types";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from 'react';
import { Context } from '../../App';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { setUserData } = useContext(Context);
    const GoogleTextColor = [
        { letter: 'G', color: 'text-[#4285F4]' },
        { letter: 'o', color: 'text-[#DB4437]' },
        { letter: 'o', color: 'text-[#F4B400]' },
        { letter: 'g', color: 'text-[#0F9D58]' },
        { letter: 'l', color: 'text-[#4285F4]' },
        { letter: 'e', color: 'text-[#DB4437]' },
    ];
    const navigate = useNavigate()
    return (
        <main className="flex items-center w-full h-screen fixed bg-[rgba(0,0,0,0.4)] z-10 top-0 left-0">
            <section className='m-auto shadow-2xl shadow-[#202124] bg-[#202124] rounded-xl p-7 flex items-center justify-evenly flex-col'>
                <p onClick={() => { navigate('/') }} className="text-white text-xl cursor-pointer font-bold ml-auto mb-3">X</p>
                <img src="https://www.google.com/logos/doodles/2024/uzbekistan-independence-day-2024-6753651837110284-la202124.gif" alt="UzbFlags" className="mb-9" />
                <h1 className="font-bold text-white text-4xl mb-8">Sign up with
                    <div className="inline-flex ml-3">
                        {GoogleTextColor.map((items, i) => {
                            const { letter, color } = items;
                            return (
                                <span key={i} className={color}>{letter}</span>
                            )
                        })}
                    </div></h1>
                <div>
                    <GoogleLogin className="w-80 h-24"
                        onSuccess={credentialResponse => {
                            const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                            setUserData( credentialResponseDecoded);
                            
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>
            </section>
        </main>
    )
}
Login.propTypes = {
    setUserData: PropTypes.func,
};