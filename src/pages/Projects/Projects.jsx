import img1 from '../../assets/survey1m.png'
import img2 from '../../assets/offer2.jpg'
import img3 from '../../assets/speed.png'

import { LuArrowBigRightDash } from "react-icons/lu";
const Projects = () => {
    const survey=(route)=>{
        if (route=="survey"){
            window.open('https://survey-sphere-b6935.web.app/',"_blank")

        }
        if (route=="offer"){
            window.open('https://online-marketplace-1a3a1.web.app/',"_blank")

        }
        if (route=="speed"){
            window.open('https://brand-shop-c5e2b.web.app/',"_blank")

        }
    }
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold font-mono text-[rgb(231,139,58)] mt-8 ">My Projects</h2>
            <hr className=" h-1 w-[50%] bg-[#e78b3a] rounded-full mt-3 mb-12 justify center mx-auto"></hr>
            <div className='max-w-6xl mx-auto p-4'>
                <div className="flex flex-col lg:flex-row md:flex-row gap-8 mb-24">
                    <div className="lg:w-[45%] md:w-[45%] mt-9">
                        <img src={img1}  className="rounded-2xl flex justify-center mx-auto" alt="" />

                    </div>
                    <div className="lg:w-[50%] md:w-[50%] ">
                        <p className='font-mono flex text-[rgb(231,139,58)] my-5 text-2xl font-semibold '>Name:Survey Sphere</p>
                    <p className=' font-mono flex text-[#eaccad] '>
                        
                    This website is a survey and polling related website where surveyors can create surveys with different questions. Users can vote according to their choice in a survey only once. Users can become a pro user if they buy packages. Admin can view every users, their payments, surveys etc. Users can see graph of each surveys according to the number of votes which will help them to analyse each surveys. 
                    </p>
                    <div>
                    <div className='my-8 font-mono flex text-[#eaccad] '>For more features visit the livelink <div className='mt-1 mx-4'><LuArrowBigRightDash></LuArrowBigRightDash></div><button onClick={()=>survey('survey')}className='btn btn-xs bg-[#e78b3a]'>Click here</button></div>
                    </div>
                    </div>

                </div>
                <div>
                <div className="flex flex-col-reverse lg:flex-row md:flex-row gap-8 mb-20">
                    
                    <div className="lg:w-[50%] md:w-[50%] my-4">
                    <p className='font-mono flex text-[rgb(231,139,58)] mb-2 text-2xl font-semibold'>Name:Offer Hive</p>
                    <p className=' font-mono flex text-[#eaccad] '>
                    This website is related to posting jobs where bidders can bid for jobs and the person who posted those jobs/offers can either accept or reject the bid request. Each individual users can view their posted jobs and bid request. 
                    </p>
                    <div>
                    <div className='my-8 font-mono flex text-[#eaccad] '>For more features visit the livelink <div className='mt-1 mx-4'><LuArrowBigRightDash></LuArrowBigRightDash></div><button onClick={()=>survey('offer')}className='btn btn-xs bg-[#e78b3a]'>Click here</button></div>
                    </div>
                    </div>
                    
                    <div className="lg:w-[45%] md:w-[45%]">
                        <img src={img2}  className="rounded-2xl flex justify-center mx-auto" alt="" />

                    </div>

                </div>
                    

                </div>
                <div>
                <div className="flex flex-col lg:flex-row md:flex-row  gap-8 mb-20 ">
                    <div className="lg:w-[40%]  md:w-[40%] mt-9">
                        <img src={img3} className="rounded-2xl flex justify-center mx-auto"alt="" />

                    </div>
                    <div className="lg:w-[50%] md:w-[50%]  mt-6">
                        <p className='font-mono flex text-[rgb(231,139,58)] my-5 text-2xl font-semibold'>Name:Speed Up</p>
                    <p className=' font-mono flex text-[#eaccad] '>
                        
                    This is a website related to a brand shop where cars from different brands are availabe. Users can see details of each car with their price and can buy cars according to their choice. Car sellers can post and sell cars according to their choice.


                    </p>
                    <div>
                    <div className='my-8 font-mono flex text-[#eaccad] '>For more features visit the livelink <div className='mt-1 mx-4'><LuArrowBigRightDash></LuArrowBigRightDash></div><button onClick={()=>survey('speed')}className='btn btn-xs bg-[#e78b3a]'>Click here</button></div>
                    </div>
                    </div>

                </div>
                


                </div>
            </div>
            
        </div>
    );
};

export default Projects;