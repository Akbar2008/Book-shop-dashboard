import Search from '../../public/icon/search.svg';
import Call from '../../public/icon/call.svg';
import Down from '../../public/icon/down.svg';

export const Header = () => {

  return (
    <header className='w-full flex bg-white p-6 shadow items-center justify-between'>
        <form className='flex max-w-3xl border-gray-500 border-[1px] rounded-xl p-[10px_18px]'> 
          <label htmlFor="search" className='mr-2 cursor-pointer'><Search/></label>
          <input type="text" onInput={(e)=>{e.target.value = e.target.value.replace(/[0-9]/g, '')}} id="search" className='w-screen outline-none bg-none' placeholder='search interesting information books'/>
        </form>
        <div className='flex items-center gap-3'>
          <Call className='mr-3 cursor-pointer'/>
          <img src="/image/user.png" alt="user logo" className='w-10 h-10 cursor-pointer'/>
          <Down className='cursor-pointer'/>
        </div>
    </header>
  )
}
