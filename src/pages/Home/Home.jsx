import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Banner from "../../Banner/Banner";
import img2 from '../../assets/science.png';
import img3 from '../../assets/mongo.webp';
import img4 from '../../assets/express.png'
import img5 from '../../assets/node.png'
import img6 from '../../assets/html5.png'
import img7 from '../../assets/css-3.png'
import img8 from '../../assets/tailwind.png'
import img9 from '../../assets/daisy.png'
import img10 from '../../assets/firebase.jpg'
import img11 from '../../assets/js.png'



const Home = () => {
    console.log(useLocation())
    
    return (
        
       <div>
         <Banner></Banner>
        <div className="h-[400px] font-mono my-4  ">
            <h2 className="text-center font-mono font-extrabold text-4xl text-[#e78b3a]">Technologies</h2>
            
            <hr className="text-center h-1 w-[50%] bg-[#e78b3a] justify-center mx-auto rounded-full mt-3 mb-12"></hr>
            <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto items-center justify-center place-items-center">
                <div>
                    <img src={img2} className="h-[40px] w-[40px]"alt="" />

                </div>
                <div>
                    <img src={img3} className="h-[40px] w-[40px]" alt="" />

                </div>
                <div>
                    <img src={img4} className="h-[40px] w-[40px]" alt="" />

                </div>
                <div>
                    <img src={img5} className="h-[40px] w-[90px]" alt="" />

                </div>
                <div>
                    <img src={img6} className="h-[40px] w-[40px]" alt="" />

                </div>
                <div>
                    <img src={img7} className="h-[40px] w-[40px]" alt="" />

                </div>
                <div>
                    <img src={img8} className="h-[40px] w-[40px]" alt="" />

                </div>
                <div>
                    <img src={img9} className="h-[40px] w-[80px]" alt="" />

                </div>
                <div>
                    <img src={img10} className="h-[40px] w-[40px]" alt="" />

                </div>
                <div>
                    <img src={img11} className="h-[40px] w-[80px]" alt="" />

                </div>
            </div>
       
        </div>
       </div>
        
    );
};

export default Home;