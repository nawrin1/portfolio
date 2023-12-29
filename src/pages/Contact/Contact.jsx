import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'
import Swal from "sweetalert2";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// 7eGNK-JGzkywaqftb

// "service_0a6nsij"
// "template_dg333qi"
// "7eGNK-JGzkywaqftb"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_0a6nsij", "template_dg333qi", form.current, "7eGNK-JGzkywaqftb")
            .then((result) => {
               
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Email sent",
  showConfirmButton: false,
  timer: 1500
});

                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const find=(route)=>{
        if (route=="fb"){
            window.open('https://www.facebook.com/jannatulferdous.nawrin.7?mibextid=ZbWKwL',"_blank")

        }
        if (route=="gt"){
            window.open('https://github.com/nawrin1',"_blank")

        }
        if (route=="lk"){
            window.open('https://www.linkedin.com/in/jannatul-ferdous-nawrin-162058233/',"_blank")

        }
    }

    return (
        <div>
        <h2 className="text-center font-mono font-extrabold text-4xl text-[#e78b3a]">Contact Me</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            
            <div className="max-w-md mx-auto p-4">
  <div className="mb-4">
    <label className="block  text-sm font-bold mb-2" htmlFor="user_name">
      Name
    </label>
    <input
      className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
      type="text"
      name="user_name"
    />
  </div>

  <div className="mb-4">
    <label className="block  text-sm font-bold mb-2" htmlFor="user_email">
      Email
    </label>
    <input
      className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
      type="email"
      name="user_email"
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-bold mb-2" htmlFor="message">
      Message
    </label>
    <textarea
      className="w-full p-2 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 "
      name="message"
    ></textarea>
  </div>

  <div className="flex justify-center">
    <input
      className="bg-blue-500 text-white py-2 px-4 border border-blue-500 rounded cursor-pointer hover:bg-blue-700"
      type="submit"
      value="Send"
    />
  </div>
</div>

        </form>
        <div>
        <h2 className="text-center font-mono font-extrabold text-4xl text-[#e78b3a] mt-16 mb-6">Find Me Here!!</h2>
        <div className="max-w-xl mx-auto ">
            <div className="grid grid-cols-3 place-items-center">
                <div >
                    <button onClick={()=>find('fb')}><FaFacebook className="text-blue-400 text-4xl"></FaFacebook></button>

                </div>
                <div>
                <button onClick={()=>find('gt')}><FaGithub className="text-white text-4xl"></FaGithub></button>
                    

                </div>
                <div>
                <button onClick={()=>find('lk')}>  <FaLinkedin className="text-blue-400 text-4xl"></FaLinkedin></button>
                  

                </div>

                
            </div>
            <div className="text-center my-12 text-2xl">
                    <p>Gmail:jannatulnawrin@gmail.com</p>
                    <p>Phone:+8801749787037</p>
                </div>

        </div>

        </div>
        </div>

    );
};
    
      
    
    


export default Contact;

