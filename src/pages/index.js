import Image from "next/image";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  function slideLeft() {
    let slider = document.getElementById('slider');
    slider.scrollLeft -= 320;
    if (slider.scrollLeft == 0){
      slider.scrollLeft = 1984;
    }
  }
  
  function slideRight() {
    let slider = document.getElementById('slider');
    slider.scrollLeft += 320;
    if (slider.scrollLeft > 1984){
      slider.scrollLeft = 0;
    }
  }
   
  


  return (
    <main className="h-auto m-0 pt-24">
      <div className="w-full box-border p-4 lg:px-12 h-auto bg-white">
        <div className="md:h-full w-full">
          <div className="h-full hidden w-full border lg:flex items-center justify-center">
            <img
              className="h-full w-full"
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1769,c_limit/6f1f7e2b-6551-4ce2-ab95-03cadbee9212/nike-just-do-it.jpg"
              alt=""
            />
          </div>
          <div className="lg:hidden h-full w-full border flex items-center justify-center">
            <img
              className="w-full h-full"
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_855,c_limit/1a72cada-9548-4c93-a1d1-ada60fc88c6b/nike-just-do-it.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-auto flex-col items-center justify-center"> 
          <h1 className="md:text-center md:text-[84px] text-6xl md:w-[8em] m-auto leading-[43px] md:leading-[58px] text-gray-900 font-passion_one tracking-tight md:my-16 my-4 md:mb-6 ">
            ESSENTIALS FOR SUMMER TRIPS
          </h1>
          <p className="md:text-center font-urbanist text-md md:w-auto w-96">
            Nike Trail and ACG styles are made for overnight trips in all kinds
            of temps.
          </p>
          <div className="w-full flex items-center md:justify-center my-6 md:my-8">
            <button className="w-auto bg-black md:mx-3 mr-2 text-white md:text-md text-sm flex items-center justify-center cursor-pointe h-10 px-6 md:px-10 rounded-3xl hover:bg-zinc-700">
              Shop Men
            </button>
            <button className="w-auto bg-black md:mx-3 mr-2 text-white md:text-md text-sm flex items-center justify-center cursor-pointe h-10 px-6 md:px-10 rounded-3xl hover:bg-zinc-700">
              Shop Women
            </button>
            <button className="w-auto bg-black md:mx-3 mr-2 text-white md:text-md text-sm flex items-center justify-center cursor-pointe h-10 px-6 md:px-10 rounded-3xl hover:bg-zinc-700">
              Shop Kids
            </button>
          </div>
        </div>
      </div>
      <h1 className="lg:ml-12 ml-4 md:text-2xl text-2xl md:mt-10 text-gray-800 font-urbanist tracking-wide">Trending</h1>
      <div className="w-full h-auto md:grid grid-cols-2 gap-x-3 box-border p-4 lg:px-12">
        <div className="w-full relative h-full">
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_923,c_limit/e3c5e49c-84eb-4044-a9c3-f27bac733738/nike-just-do-it.jpg" className="w-full realtive h-full object-cover" alt="" />
          <div className="absolute w-2/4 bottom-0 left-0 md:h-48 md:pl-10 pl-4">
            <h2 className="md:text-2xl text-2xl font-bold font-urbanist w-72 text-white">There's Still Time to Score Gifts for mom</h2>
            <div className="w-96 h-20 md:mt-4 flex items-center">
              <button className="bg-white md:h-12 h-8 mr-4 w-auto hover:bg-zinc-300 md:text-lg md:px-6 px-6 flex items-center rounded-3xl">Shop</button>
              <button className="bg-white md:h-12 h-8 mr-4 w-auto hover:bg-zinc-300 md:text-lg md:px-6 px-6 flex items-center rounded-3xl">Shop Gift Cards</button>
            </div>
          </div>        
        </div>
        <div className="w-full relative h-full">
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_923,c_limit/f5991d2e-ca7a-426e-a87c-ca99aa32ddf2/nike-just-do-it.jpg" className="w-full h-full object-cover" alt="" />
          <div className="absolute w-2/4 bottom-0 left-0 md:h-48 md:pl-10 pl-4">
            <h2 className="text-2xl font-bold font-urbanist w-40 text-white">Latest from Nike Swim</h2>
            <div className="w-96 h-20 md:mt-4 flex items-center">
              <button className="bg-white md:h-12 h-8 mr-4 w-auto hover:bg-zinc-300 md:text-lg md:px-6 px-6 flex items-center rounded-3xl">Shop</button>
            </div>
          </div>                  
        </div>
      </div>
      <h1 className="lg:ml-12 ml-4 md:text-2xl mt-12 text-2xl md:mt-28 text-gray-800 font-urbanist tracking-wide">Always Iconic</h1>
      <div className="w-full my-6 relative h-86">
        <div onClick={()=>{
          slideLeft();
        }} className="absolute cursor-pointer hidden h-12 rounded-full w-12 bg-white md:flex items-center justify-center top-2/4 -translate-y-1/2 md:left-10 left-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height='38'width='38' id="arrow"><path fill="#134563" d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"></path></svg>
        </div>
        <div onClick={()=>{
          slideRight();
        }} className="absolute cursor-pointer h-12 hidden rounded-full w-12 bg-white md:flex items-center justify-center top-2/4 -translate-y-1/2 md:right-10 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" height='38'width='38' enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="arrow"><path fill="#134563" d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7" transform="translate(237 335)"></path></svg>
        </div>
        <div style={{scrollBehavior: "smooth"}} id="slider" className="w-full h-full md:overflow-hidden flex overflow-x-auto scrollbar-thumb-red-900">
          <div className="h-full min-w-[320px] mr-3 ">
            <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg" alt="" />
          </div>
          <div className="h-full min-w-[320px] mr-3 ">
            <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/83c538c5-239b-49cf-8a44-b0924596e794/nike-just-do-it.jpg" alt="" />
          </div>
          <div className="h-full min-w-[320px] mr-3 ">
            <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/495e355e-017e-44dc-a9ee-6cd11899763f/nike-just-do-it.jpg" alt="" />
          </div>
          <div className="h-full min-w-[320px] mr-3 ">
            <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/465c9f08-2432-4b35-bcd8-5a8cbc29df34/nike-just-do-it.jpg" alt="" />
          </div>
          <div className="h-full min-w-[320px] mr-3 ">
            <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/15cdc7b5-6de0-4d5c-81e9-6d01fc944b18/nike-just-do-it.jpg" alt="" />
          </div>
          <div className="h-full min-w-[320px] mr-3 ">
            <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/8d5cabf7-8185-471f-84d2-a89403b6d3eb/nike-just-do-it.jpg" alt="" />
          </div>
          <div className="h-full min-w-[320px] mr-3 ">
            <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/f0a04bde-ca73-405e-a895-eba7fc7cf2f2/nike-just-do-it.jpg" alt="" />
          </div>
          <div className="h-full min-w-[320px] mr-3 ">
            <img className="w-full h-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/83c538c5-239b-49cf-8a44-b0924596e794/nike-just-do-it.jpg" alt="" />
          </div>
        </div>
      </div>
      <h1 className="lg:ml-12 ml-4 md:text-2xl mt-18 mb-6 text-2xl md:mt-28 text-gray-800 font-urbanist tracking-wide">Air Max</h1>
      <div className="w-full h-auto box-border lg:px-12 mb-10">
          <div className="w-full h-4/5 flex items-center justify-center">
            <div className="w-full h-full hidden lg:flex items-center justify-center">
              <img className="w-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1769,c_limit/e4e632a4-b8ed-47ba-b57a-8906a7db995a/nike-just-do-it.jpg" alt="" />
            </div>
            <div className="w-full h-full lg:hidden p-4" >
              <img className="w-full" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_855,c_limit/684545f4-1241-45b6-b1fb-832ec8f9d450/nike-just-do-it.jpg" alt="" />
            </div>
          </div>
          <div className="w-full h-auto flex-col items-center justify-center pl-4">
          <h1 className="md:text-center md:text-[84px] text-6xl md:w-[8em] m-auto leading-[23px] md:leading-[58px] text-gray-900 font-passion_one tracking-tight md:my-16 md:mb-6 my-4">
            BRING THE ENERGY
          </h1>
          <p className="md:text-center font-urbanist text-md md:w-auto w-96">
           Turn up your style with all the comfort and color of the Air Max SC.
          </p>
          <div className="w-full flex items-center md:justify-center my-6 md:my-8">
            <button className="w-auto bg-black md:mx-3 mr-2 text-white md:text-md text-sm flex items-center justify-center cursor-pointe h-10 px-6 md:px-10 rounded-3xl hover:bg-zinc-700">
              Shop All Air Max
            </button>
          </div>
          </div>
      </div>
    </main>
  );
}
