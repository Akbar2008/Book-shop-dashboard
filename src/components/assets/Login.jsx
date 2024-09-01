import { GoogleLogin } from '@react-oauth/google';

export const Login = () => {
    return (
        <main className="flex items-center w-full h-screen fixed bg-[rgba(0,0,0,0.9)] z-10 top-0 left-0">
            <section className='m-auto'>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </section>
        </main>
    )
}
