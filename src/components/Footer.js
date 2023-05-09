import { useState } from "react";

const Footer = () => {


    const[isAboutActive, setAboutActive] = useState(false);
    let aboutClass = isAboutActive ? "h-auto border-b border-zinc-800 pb-6" : "h-0";

    const[isGetHelpActive, setGetHelpActive] = useState(false);
    let getHelp = isGetHelpActive ? "h-auto" : "h-0";

    const toggleAbout = () => {
        setGetHelpActive(false)
        setAboutActive(!isAboutActive);
    };
    const toggleHelp = () => {
        setAboutActive(false);
        setGetHelpActive(!isGetHelpActive)
    };

    return (  
        <footer className="bg-black w-screen absolute h-auto bottom-0">
            <div className="w-screen md:flex h-auto">
                <div className="xl:w-1/6"></div>
                <div className="w-auto md:h-full flex-col justify-center px-8 py-7">
                    <div className= "flex-col w-32"> 
                        <h5 className="text-white font-oswald text-md lg:text-lg font-light mt-2">GIFT CARDS</h5>
                        <h5 className="text-white font-oswald text-md lg:text-lg font-light mt-2">PROMOTIONS</h5>
                        <h5 className="text-white font-oswald text-md lg:text-lg font-light mt-2">FIND A STORE</h5>
                        <h5 className="text-white font-oswald text-md lg:text-lg font-light mt-2">SIGN UP FOR EMAIL</h5>
                        <h5 className="text-white font-oswald text-md lg:text-lg font-light mt-2">BECOME A MEMBER</h5>
                        <h5 className="text-white font-oswald text-md lg:text-lg font-light mt-2">NIKE JOURNAL</h5>
                    </div>
                </div>
                <div className="w-auto h-auto  md:h-full flex-col items-center justify-center px-8 md:p-8 lg:ml-10">

                    <div className="w-full h-auto hidden md:block">
                        <h1 className="text-white text-xl uppercase font-oswald mb-2 font-bold">Get help</h1>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Order Status</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Shipping and Delivery</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Returns</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Order Cancellation</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Payment Options</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Gift Card Balance</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Contact Us</h2>
                    </div>

                    {/* accordion */}

                    <div className="w-full h-auto border-t border-zinc-800 md:hidden">
                    <button onClick={()=>{
                        toggleHelp()
                    }} className="text-white font-oswald uppercase text-lg mt-6 w-full flex justify-between h-8">Get Help
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
                                <path fill="#fff" d="M9.28,9.84A.75.75,0,0,0,8,10.38a.74.74,0,0,0,.22.53l3.25,3.25a.75.75,0,0,0,1.06,0l3.25-3.25a.77.77,0,0,0,0-1.07.75.75,0,0,0-1.06,0L12,12.56Z"></path>
                            </g>
                        </svg>
                    </button>
                    <div className={`flex-col w-full ${getHelp} overflow-hidden transition ease duration-900`}>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Order Status</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Shipping and Delivery</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Returns</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Order Cancellation</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Payment Options</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Gift Card Balance</h2>
                        <h2 className="font-urbanist text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Contact Us</h2>
                    </div>
                    </div>

                </div>
                <div className="w-auto  md:h-full flex-col items-center justify-center px-8 md:p-8 lg:ml-10">

                    <div className="w-full h-auto hidden md:block">
                        <h1 className="text-white text-xl uppercase font-oswald mb-2 font-bold">ABOUT NIKE</h1>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">News</h2>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Careers</h2>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Investors</h2>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Purpose</h2>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Sustainability</h2>
                    </div>
                    {/* accordion */}
                    <div className="w-full h-auto md:hidden mx-0">
                    <button onClick={toggleAbout} className="text-white font-oswald uppercase text-lg mt-6 w-full flex justify-between h-auto mx-0">ABOUT NIKE
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
                                <path fill="#fff" d="M9.28,9.84A.75.75,0,0,0,8,10.38a.74.74,0,0,0,.22.53l3.25,3.25a.75.75,0,0,0,1.06,0l3.25-3.25a.77.77,0,0,0,0-1.07.75.75,0,0,0-1.06,0L12,12.56Z"></path>
                            </g>
                        </svg>
                    </button>
                    <div className={`flex-col w-full ${aboutClass} overflow-hidden`}>   
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">News</h2>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Careers</h2>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Investors</h2>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Purpose</h2>
                        <h2 className="font-urbanist ml-1 text-gray-500 text-md mt-1 cursor-pointer hover:text-white">Sustainability</h2>
                    </div>
                    </div>    

                </div>      
                <div className="w-auto md:h-full lg:flex-1 justify-center md:pr-36 flex pt-8">
                    <div className="flex items-center justify-center w-10 mr-4 mb-6 h-10 rounded-full bg-zinc-800 hover:bg-white transition ease-linear duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" height='26' width='26' viewBox="0 0 16 16" id="twitter"><path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path></svg>
                    </div>
                    <div className="flex items-center justify-center w-10 mr-4 h-10 rounded-full bg-zinc-800 hover:bg-white transition ease-linear duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" height='30' width='30' data-name="Layer 1" viewBox="0 0 24 24" id="facebook"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg>                   
                     </div>
                    <div className="flex items-center justify-center w-10 mr-4 h-10 rounded-full bg-zinc-800 hover:bg-white transition ease-linear duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 2476 2476" id="instagram"><path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path></svg>                    </div>
                    <div className="flex items-center justify-center w-10 mr-4 h-10 rounded-full bg-zinc-800 hover:bg-white transition ease-linear duration-300 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width='28' height='28' viewBox="0 0 16 16" id="youtube"><path fill-rule="evenodd" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z" clip-rule="evenodd"></path></svg>                   
                    </div>
                </div>
            </div>
            <div className="w-screen md:h-12 md:pb-4 b-0 flex items-center justify-center">
                <div className="xl:w-4/5 w-full md:px-8 py-6 h-full md:flex items-center xl:pl-28 md:justify-between">
                    <h6 className="text-zinc-500 font-urbanist text-center md:text-left text-sm">2023 Nike. Inc. All Rights Reserved</h6>
                    <div className="flex flex-grow justify-center md:justify-end mt-4 md:mt-0 md:px-0">
                        <h6 className="text-zinc-600  mr-4 xl:mr-4 text-sm cursor-pointer hover:text-white">Guides</h6>
                        <h6 className="text-zinc-600  mr-4 xl:mr-4 text-sm cursor-pointer hover:text-white">Terms of Sale</h6>
                        <h6 className="text-zinc-600  mr-4 xl:mr-4 text-sm cursor-pointer hover:text-white">Terms of Use</h6>
                        <h6 className="text-zinc-600  mr-4 xl:mr-4 text-sm cursor-pointer hover:text-white">Privacy policy</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;