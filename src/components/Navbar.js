import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <header>
      <div className="w-full border flex justify-center items-center p-4 ">
        <div className="flex justify-between w-4/5 border">
          <div className="flex items-center">
            <img
              className="h-[45px]"
              src={logo}
              alt="logo"
              loading="lazy"
            />
            <div className="flex border gap-4 ml-20 font-normal text-3xl font-roboto">
              <p href="#" className='cursor-pointer'>Home</p>
              <p href="#" className='ml-10 cursor-pointer'>AboutUs</p>
              <p href="#" className='ml-10 cursor-pointer'>Pricing</p>
              <p href="#" className='ml-10 cursor-pointer'>Features</p>
            </div>
          </div>
          <div className='bg-black cursor-pointer px-10 rounded-md '>
            <p className='text-3xl text-white font-roboto'>Download</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
