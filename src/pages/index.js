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
   
  
  let scrollLeft = () => {
    let slider = document.getElementById('carousel');
    slider.scrollLeft -= 370;
  };

  let scrollRight = () => {
    let slider = document.getElementById('carousel');
    slider.scrollLeft += 370;
  };

  return (
    <main className="h-auto m-0 pt-24 overflow-hidden">
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
          <h1 className="md:text-center md:text-[84px] text-6xl md:w-[8em] m-auto leading-[43px] md:leading-[58px] text-gray-900 font-passion_one tracking-tight md:my-16 my-4 md:mb-6 ">
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
      <div className="relative w-full md:mt-28 mb-8">
        <h1 className="lg:ml-12 ml-4 md:text-2xl text-2xl text-gray-800 mb-12 mt-14 font-urbanist tracking-wide">Fresh Sale Styles</h1>
        <div className="absolute pb-0 top-0 flex items-end justify-end right-0 h-30 pr-2 md:pr-10 w-60">
          <button onClick={()=>{scrollLeft()}} className="md:w-12 md:h-12 w-10 h-10 cursor-pointer bg-gray-300 ml-2 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height='38'width='38' id="arrow"><path fill="#134563" d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"></path></svg>
          </button>
          <button onClick={()=>{scrollRight()}} className="md:w-12 md:h-12 w-10 h-10 cursor-pointer bg-gray-300 ml-2 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height='38'width='38' enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="arrow"><path fill="#134563" d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7" transform="translate(237 335)"></path></svg>
          </button>
        </div>
        <div className="w-full box-border lg:px-12  h-auto">
          <div id="carousel" style={{ scrollSnapType: 'x mandatory', scrollBehavior : "smooth" }} className="w-full h-auto overflow-x-auto whitespace-nowrap">
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_582,c_limit/a35196f9-5f37-416f-a368-a865fe7f45b8/react-infinity-3-womens-road-running-shoes-XpNmlR.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_309,c_limit/a35196f9-5f37-416f-a368-a865fe7f45b8/react-infinity-3-womens-road-running-shoes-XpNmlR.png" alt="" />
            </div>
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_582,c_limit/5401287f-61b1-4c46-836d-6f4897d4ff1f/wio-9-womens-road-running-shoes-0MS1bT.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_309,c_limit/5401287f-61b1-4c46-836d-6f4897d4ff1f/wio-9-womens-road-running-shoes-0MS1bT.png" alt="" />
            </div>
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_582,c_limit/fc847fa4-3f1e-450b-9343-844504ac306e/indy-plunge-cutout-womens-medium-support-padded-sports-bra-WsnzTx.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_309,c_limit/fc847fa4-3f1e-450b-9343-844504ac306e/indy-plunge-cutout-womens-medium-support-padded-sports-bra-WsnzTx.png" alt="" />
            </div>
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_582,c_limit/d70962ba-b254-488f-937e-6f0d9c442cc3/tempo-womens-brief-lined-running-shorts-FRBq5w.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_309,c_limit/d70962ba-b254-488f-937e-6f0d9c442cc3/tempo-womens-brief-lined-running-shorts-FRBq5w.png" alt="" />
            </div>
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_582,c_limit/a65c6560-0465-442c-b95a-5b924bd0a211/react-infinity-3-mens-road-running-shoes-1bRq75.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_309,c_limit/a65c6560-0465-442c-b95a-5b924bd0a211/react-infinity-3-mens-road-running-shoes-1bRq75.png" alt="" />
            </div>
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_582,c_limit/be6f4f03-835b-4ed7-89ef-b90b933cc29a/vaporfly-2-mens-road-racing-shoes-glWqfm.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_309,c_limit/be6f4f03-835b-4ed7-89ef-b90b933cc29a/vaporfly-2-mens-road-racing-shoes-glWqfm.png" alt="" />
            </div>
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_582,c_limit/561912b8-ed22-494e-aa0b-1ddd42b1af01/dri-fit-run-division-pinnacle-mens-short-sleeve-running-top-jwBVph.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_309,c_limit/561912b8-ed22-494e-aa0b-1ddd42b1af01/dri-fit-run-division-pinnacle-mens-short-sleeve-running-top-jwBVph.png" alt="" />
            </div>
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_582,c_limit/i1-30f8146d-ec78-47d1-87eb-7e4d23262af4/flex-stride-mens-7-2-in-1-running-shorts-pnwp4c.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_309,c_limit/i1-30f8146d-ec78-47d1-87eb-7e4d23262af4/flex-stride-mens-7-2-in-1-running-shorts-pnwp4c.png" alt="" />
            </div>
            <div style={{scrollSnapAlign: "center"}} className="w-1/3 auto h-full min-w-[370px] inline-block mr-4">
              <img className="hidden lg:flex w-full h-full" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_582,c_limit/a8c63aaf-0d27-4ebf-a92d-f9b45a92f5b4/air-max-90-ltr-big-kids-shoes-1wzwJM.png" alt="" />
              <img className="w-full h-full lg:hidden" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_648,c_limit/a8c63aaf-0d27-4ebf-a92d-f9b45a92f5b4/air-max-90-ltr-big-kids-shoes-1wzwJM.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="lg:ml-12 ml-4 md:text-2xl mt-18 mb-6 text-2xl md:mt-28 text-gray-800 font-urbanist tracking-wide">Essentials</h1>
      <div className="box-border px-4 lg:px-12 w-full h-auto mb-10 flex items-center justify-center">
        <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
            <div className="border cursor-pointer w-full flex-col relative items-center justify-center h-auto">
              <img className="m-auto w-full h-4/5 object-cover" src="./pictures/Air Jordan 1 Mid SE Craft/693cc53f-d228-472a-bf17-0a2e2c42daf7.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
            <div className="border cursor-pointer w-auto flex-col relative items-center justify-center h-auto">
              <img className="w-full h-4/5 object-cover" src="./pictures/p1 Air Jordan 1 Mid SE/0d6a88ca-7ff8-4ad9-991b-b2e2a33cf66e.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
            <div className="border cursor-pointer w-auto flex-col relative items-center justify-center h-auto">
              <img className="w-full h-4/5 object-cover" src="./pictures/p2 Air Jordan XXXVII Low PF/9cb30549-fe13-4998-ad7d-6c2876be3b5b.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
            <div className="border cursor-pointer w-auto flex-col relative items-center justify-center h-auto">
              <img className="w-full h-4/5 object-cover" src="./pictures/p3 Jordan Why Not .6 PF/0b05a3de-0637-4af2-8844-ad6a381adcc4.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
            <div className="border cursor-pointer w-auto flex-col relative items-center justify-center h-auto">
              <img className="w-full h-4/5 object-cover" src="./pictures/p4 Jordan Stay Loyal 2/thumbnail.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
            <div className="border cursor-pointer w-auto flex-col relative items-center justify-center h-auto">
              <img className="w-full h-4/5 object-cover" src="./pictures/p5 Jordan Delta 3 Low/thumbnail.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
            <div className="border cursor-pointer w-auto flex-col relative items-center justify-center h-auto">
              <img className="w-full h-4/5 object-cover" src="./pictures/p6 Air Jordan 13 Retro/thumbnail.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
            <div className="border cursor-pointer w-auto flex-col relative items-center justify-center h-auto">
              <img className="w-full h-4/5 object-cover" src="./pictures/p7 Air Jordan 6 Retro/thumbnail.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
            <div className="border cursor-pointer w-auto flex-col relative items-center justify-center h-auto">
              <img className="w-full h-4/5 object-cover" src="./pictures/p8 Air Jordan 1 Retro High OG/thumbnail.webp" alt="shoe" />
              <div className="w-full box-border px-11 h-20 absolute bottom-0">
                  <h2 className="font-urbanist text-lg font-semibold text-gray-700">Air Jordan 1 Mid SE Craft</h2>
                  <span className="w-full flex justify-between items-center">
                    <span className="flex items-center justify-center">
                      <h2 className="text-zinc-500 font-urbanist font-bold text-lg">Ksh. 12000</h2>
                      <h2 className="text-zinc-500 font-urbanist font-light ml-4 text-md line-through">Ksh. 15000</h2>
                    </span>
                    <h2 className="text-lg text-green-400">1.76% off</h2>
                  </span>
              </div>
            </div>
        </div>
      </div>
      <div className="w-full h-auto flex-col items-center justify-center"> 
          <h1 className="md:text-center md:text-[84px] text-6xl md:w-[8em] m-auto leading-[43px] md:leading-[58px] text-gray-900 font-passion_one tracking-tight md:my-16 my-4 md:mb-6 ">
            THANKS FOR BEING HERE
          </h1>
          <p className="md:text-center font-urbanist text-md md:w-auto w-96">
            Your Global Community awaits
          </p>
          <div className="w-full flex items-center md:justify-center my-6 md:my-8">
            <button className="w-auto bg-black md:mx-3 mr-2 text-white md:text-md text-sm flex items-center justify-center cursor-pointe h-10 px-6 md:px-10 rounded-3xl hover:bg-zinc-700">
             Join Us
            </button>
          </div>
        </div>
    </main>
  );
}
