import { useState } from "react";

const Navbar = () => {

  //main menu ;

  const[isMenuActive, setMenuActive] = useState(false);
  const menuSvg = !isMenuActive ?  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 48 48" id="menu"><path fill="#333" fill-rule="evenodd" d="M6 11C6 10.4477 6.44772 10 7 10H41C41.5523 10 42 10.4477 42 11 42 11.5523 41.5523 12 41 12H7C6.44772 12 6 11.5523 6 11zM6 24C6 23.4477 6.44772 23 7 23H41C41.5523 23 42 23.4477 42 24 42 24.5523 41.5523 25 41 25H7C6.44772 25 6 24.5523 6 24zM6 37C6 36.4477 6.44772 36 7 36H41C41.5523 36 42 36.4477 42 37 42 37.5523 41.5523 38 41 38H7C6.44772 38 6 37.5523 6 37z" clip-rule="evenodd"></path></svg>  : <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="close" height='30' width="30" ><path d="M13.4,12l6.3-6.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4
	l6.3,6.3l-6.3,6.3C4.1,18.5,4,18.7,4,19c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.4,0.3,0.7,0.3
	s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z"></path></svg>
  const menuHeight = isMenuActive ? 'h-78 translate-y-0' : '-translate-y-full';
  const toggleMainMenu = () => {
    setMenuActive(!isMenuActive);
    setMenuCategoryActive(false);
    setMenuAccessoriesActive(false);
  }

  // categories

  const[isCategoriesActive, setCategoriesActive] = useState(false);
  const categoryClass = isCategoriesActive ? 'visible' : 'hidden';

  // accessories

  const [isAccessoriesActive, setAccessoriesActive] = useState(false);
  const accessoryClass = isAccessoriesActive ? 'visible' : 'hidden';


  // menu categories;

  const[isMenuCategoriesActive, setMenuCategoryActive] = useState(false);
  const menuCategoryHeight = isMenuCategoriesActive ? 'h-auto mt-2' : 'h-0';
  const toggleMenuCategory = () => {
    setMenuCategoryActive(!isMenuCategoriesActive);
    setMenuAccessoriesActive(false);
  };

  // menu accessories;

  const[isMenuAccessoriesActive, setMenuAccessoriesActive] = useState(false);
  const menuAccessoryHeight = isMenuAccessoriesActive ? 'h-auto mt-2' : 'h-0';
  const toggleMenuAccessories = () => {
    setMenuAccessoriesActive(!isMenuAccessoriesActive);
    setMenuCategoryActive(false);
  };


  return (
    <nav className="w-full h-20 border border-gray-200 flex justify-center fixed bg-white m-0 p-0 z-30">
      <div className="xl:px-18 xl:pr-20 w-full h-full flex justify-between bg-white z-20">
        <div className="h-full w-40 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            height="70"
            width="70"
            id="nike"
            className="cursor-pointer hover:fill-zinc-600"
          >
            <path
              fill="#1D1D1B"
              className="cursor-pointer hover:fill-zinc-600"
              fill-rule="evenodd"
              d="m7.998 7.567-2.758.722c-.974.241-1.826.562-2.647.281-1.116-.482-1.096-1.736-.264-3.07-1.471 1.214-4.118 5.096-.538 5.488.456.06 1.268-.1 2.15-.471l4.057-1.665L16 5.58 8.992 7.306l-.994.261z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="h-full w-2/4 lg:flex items-center justify-evenly hidden">
          <a className="pointer-cursor link" href="">
            Home
          </a>
          <div className="relative h-full"> 
              <button className="pointer-cursor link  h-full flex items-center"  onMouseEnter={()=>{
                setCategoriesActive(true)
              }}
              onMouseLeave={()=>{
                setCategoriesActive(false)
              }}
              >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                id="chevron-down-arrow"
              >
                <g data-name="19">
                  <rect
                    width="24"
                    height="24"
                    fill="none"
                    transform="rotate(-90 12 12)"
                  ></rect>
                  <path d="M9.28,9.84A.75.75,0,0,0,8,10.38a.74.74,0,0,0,.22.53l3.25,3.25a.75.75,0,0,0,1.06,0l3.25-3.25a.77.77,0,0,0,0-1.07.75.75,0,0,0-1.06,0L12,12.56Z"></path>
                </g>
              </svg>
              </button>
              <div 
               onMouseEnter={()=>{
                setCategoriesActive(true)
                }}
            n  onMouseLeave={()=>{
                setCategoriesActive(false)
              }} className={`absolute w-48 translate-y-[0px] translate-x-[-46px] bg-white border border-t-0 h-auto p-4 pb-2 z-10 ${categoryClass}`}>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">New & Featured</h6>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Men</h6>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Women</h6>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Kids</h6>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Sale</h6>
              </div>
            </div>

        <div className="relative h-full">
            <button className="pointer-cursor link h-full flex items-center"      
            onMouseEnter={()=>{
                setAccessoriesActive(true)
                }}
            onMouseLeave={()=>{
                setAccessoriesActive(false)
              }}>
            Accessories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="30"
              width="30"
              id="chevron-down-arrow"
            >
              <g data-name="19">
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  transform="rotate(-90 12 12)"
                ></rect>
                <path d="M9.28,9.84A.75.75,0,0,0,8,10.38a.74.74,0,0,0,.22.53l3.25,3.25a.75.75,0,0,0,1.06,0l3.25-3.25a.77.77,0,0,0,0-1.07.75.75,0,0,0-1.06,0L12,12.56Z"></path>
              </g>
            </svg>
          </button>

          <div 
               onMouseEnter={()=>{
                setAccessoriesActive(true)
                }}
                onMouseLeave={()=>{
                setAccessoriesActive(false)
              }} className={`absolute w-48 translate-y-[0px] bg-white translate-x-[-46px] border border-t-0 h-auto p-4 pb-2 z-10 ${accessoryClass}`}>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Jordan</h6>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Socks</h6>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Hats & Headwear</h6>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Sunglasses & Eyewear</h6>
                <h6 className="text-gray-800 font-urbanist mb-2 cursor-pointer hover:underline">Bags & Backpacks</h6>
              </div>

        </div>

          <a className="pointer-cursor link" href="">
            About
          </a>
          <a className="pointer-cursor link" href="">
            Contact
          </a>
        </div>

        <div className="h-full bord md:w-40 w-44 flex justify-evenly items-center">

          <span className="hover:bg-gray-200 cursor-pointer p-2 rounded-full relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="favorite"
              className="md:h-30 md:w-30 h-[24px] w-[24px]"
              strokeWidth="5"
            >
              <path
                fill="#000"
                strokeWidth="5"
                d="M32 53.372a8.584 8.584 0 0 1-4.195-1.087c-13.68-7.669-21.213-17.116-21.213-26.6 0-8.448 5.91-15.065 13.454-15.065A16.283 16.283 0 0 1 32 15.862a16.283 16.283 0 0 1 11.954-5.242c7.544 0 13.454 6.617 13.454 15.065 0 9.484-7.533 18.931-21.213 26.6A8.587 8.587 0 0 1 32 53.372ZM20.046 13.62c-5.96 0-10.454 5.187-10.454 12.065 0 8.351 6.989 16.868 19.679 23.982a5.613 5.613 0 0 0 5.458 0c12.69-7.114 19.679-15.631 19.679-23.982 0-6.878-4.494-12.065-10.454-12.065a13.339 13.339 0 0 0-10.7 5.433 1.457 1.457 0 0 1-1.254.669 1.5 1.5 0 0 1-1.246-.669 13.339 13.339 0 0 0-10.708-5.433Z"
              ></path>
            </svg>
            <span className="absolute w-4 h-4 bg-red-600 top-1 right-0 rounded-full flex items-center justify-center">
              <h6 className="text-white text-xs">4</h6>
            </span>
          </span>

          <span className="hover:bg-gray-200 cursor-pointer p-2 rounded-full relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-30 md:w-30 h-[24px] w-[24px]"
              viewBox="0 0 16 16"
              id="cart"
            >
              <path
                fill="#000"
                d="M14 13.1V12H4.6l.6-1.1 9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5 5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4.9L4 5z"
              ></path>
            </svg>
            <span className="absolute w-4 h-4 bg-black top-1 right-0 rounded-full flex items-center justify-center">
              <h6 className="text-white text-xs">4</h6>
            </span>
          </span>

          <span onClick={()=>{
              toggleMainMenu()
          }} className="hover:bg-gray-200 cursor-pointer p-2 rounded-full relative lg:hidden">
            {menuSvg}
          </span>

        </div>
      </div>

      <div className={`absolute bg-white lg:hidden w-full overflow-hidden top-full ${menuHeight} pb-10 border-b flex-col items-center text-center transition-height linear duration-500`}>
        <h6 className="text-2xl mt-6 font-urbanist font-bold tracking-wide hover:underline cursor-pointer">Home</h6>
        <div className="relative mt-4 p-0">  
          <button onClick={()=>{
            toggleMenuCategory();
          }} className="text-2xl font-urbanist font-bold tracking-wide hover:underline cursor-pointer">Categories</button>
          <div className={`${menuCategoryHeight} overflow-hidden m-auto`}>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Men</h6>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Women</h6>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Kids</h6>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Sale</h6>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">New & Featured</h6>
          </div>
        </div>

        <div className="relative mt-5">
          <button onClick={()=>{
            toggleMenuAccessories();
          }}  className="text-2xl font-urbanist font-bold tracking-wide hover:underline cursor-pointer">Accessories</button>
          <div className={`${menuAccessoryHeight} overflow-hidden m-auto`}>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Jordan</h6>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Socks</h6>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Hats & Headwear</h6>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Sunglasses & Eyewear</h6>
            <h6 className="text-zinc-500 cursor-pointer hover:text-black font-urbanist text-lg">Bags & Bagpacks</h6>
          </div>
        </div>

        <h6 className="text-2xl mt-5 font-urbanist font-bold tracking-wide hover:underline cursor-pointer">About</h6>
        <h6 className="text-2xl mt-5 font-urbanist font-bold tracking-wide hover:underline cursor-pointer">Contact</h6>
      </div>
    </nav>
  )
};

export default Navbar;
