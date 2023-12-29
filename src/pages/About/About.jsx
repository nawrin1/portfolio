
import img1 from '../../assets/pic2.png'
const About = () => {
    return (
        <div className='max-w-5xl mx-auto lg:my-16 md:my-16 my-4 p-4'>
        <div className='flex lg:flex-row md:flex-row flex-col lg:gap-4'>
        <div className='lg:w-[50%] md:w-[50%] w-[60%] lg:mt-32 md:mt-32 mt-8 flex justify-center mx-auto'>
            <img src={img1} className="lg:h-[50%] md:h-[30%] rounded-xl relative " alt="" />
            
        </div>
        
        <div className='lg:w-[50%] md:w-[50%]'>
          <div className=''>
                <h2 className='text-4xl font-semibold font-mono text-[#e78b3a] mt-8'>About Me</h2>
                <hr className=" h-1 w-[40%] bg-[#e78b3a] rounded-full mt-3 mb-12"></hr>
                
                <p className='leading-8 mt-12 text-[#eaccad] font-mono text-justify'>Im Jannatul Ferdous Nawrin currently an undergraduate studying Computer Science And Engineering at Brac University who is an ambitous MERN Stack Developer in the early stages of learning journey, with a focus on web development. Passionate about web development, I am actively exploring JavaScript, React, Node, and MongoDB. Committed to acquiring proficiency and hands-on experience, I am enthusiastic about contributing to projects and expanding my skill set in the ever-evolving realm of web development.</p>
            </div>
            <div>
            <h2 className='text-4xl font-semibold font-mono text-[#e78b3a]  mt-20'>Education</h2>
            <hr className=" h-1 w-[40%] bg-[#e78b3a] rounded-full mt-3 mb-12"></hr>

            <ul className='text-[#f0d3b4] font-mono'>
                <li className='my-8'>
                    <p>2020-present</p>
                    <p>Bachelors of Computer Science And Engineering</p>
                    <p>Brac University</p>
                    <hr className="  w-[40%]  rounded-full mt-3 mb-12"></hr>
                </li>
                <li className='my-8'>
                    <p>2018-2020</p>
                    <p>Higher Secondary School Certificate</p>
                    <p>Scholars School And College</p>
                    <hr className="  w-[40%]  rounded-full mt-3 mb-12"></hr>
                </li>
                <li className='my-8'>
                   <p>2016-2018</p>
                    <p>Secondary School Certificate</p>
                    <p>Scholars School And College</p>
                    
                </li>
            </ul>



            </div>
          </div>

        </div>
    </div>
    );
};

export default About;