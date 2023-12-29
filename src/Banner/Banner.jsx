import img1 from '../assets/gabriel-heinzer-g5jpH62pwes-unsplash.jpg'
import './Banner.css'
import { LuArrowBigRightDash } from "react-icons/lu";

const Banner = () => {
   
        const handleDownload = () => {
          const pdfUrl ='https://drive.google.com/file/d/1Ey-LLuYb6b1NyVP84dO3qnDeDYUFmZtX/view?usp=sharing';
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.target = '_blank';
          link.download = 'Jannatul Ferdous Nawrin.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
    return (
        <div className='flex '>
        <div className='w-[50%] relative left-32    text-center  items-center py-[10%]'>
            <h2 className='bold font-mono font-bold text-2xl md:text-3xl lg:text-3xl text-[#eccca9]'>I'm Jannatul Ferdous Nawrin</h2>
            <p className='bold font-mono font-bold text-2xl md:text-3xl lg:text-3xl'>MERN STACK Developer</p>
            <div className='mt-[20px] font-mono'>
                <p className='leading-8 mt-16 text-[#cbad8d]'>
                I'm an undergrad student at Brac University who is currently exploring fields of web development in order to build a successful career in this field
                </p>
                <div className='my-8 font-mono flex justify-center font-semibold text-2xl'>My Resume <div className='mt-1 mx-4'><LuArrowBigRightDash></LuArrowBigRightDash></div><button onClick={handleDownload} className='btn btn-sm bg-[#e78b3a]'>Download</button></div>
            </div>

        </div>
        <div className='ban  h-[450px] w-[80%] hidden md:block lg:block '>
            
            
            
        </div>
        </div>
        
    );
};

export default Banner;