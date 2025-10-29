"use client";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section id="contact" className="xsm:pb-32 pb-16 scroll-mt-10 mt-28">
      <div className="container flex justify-center">
        <div className="w-full max-w-2xl bg-[#b9e1ff] text-center rounded-[0.9375rem] md:py-20 xsm:pt-8 xsm:pb-16 xsm:px-14 px-5 pt-3 pb-4">
          <h3 className="sm:text-h3 xsm:text-h4 text-h5 font-bold text-black mb-24">
            Get in Touch
          </h3>
          <form action="" className="flex flex-col gap-5">
            <label htmlFor="" className="relative custom_label mt-3">
              <input
                className="w-full bg-input xsm:h-16 h-12 rounded-[13px] shadow-none outline-none px-4 mt-5"
                type="text"
                name="user_name"
              />
              <span className="absolute z-10 font-medium">Name</span>
            </label>
            <label htmlFor="" className="relative custom_label">
              <input
                className="w-full bg-input xsm:h-16 h-12 rounded-[13px] shadow-none outline-none px-4 mt-5"
                type="email"
                name="user_email"
              />
              <span className="absolute z-10 font-medium">Email</span>
            </label>
            <label htmlFor="" className="relative custom_label">
              <textarea
                className="w-full bg-input rounded-[13px] h-[9.375rem] resize-none shadow-none outline-none px-4 pt-4 mt-5"
                name="user_message"
              ></textarea>
              <span className="absolute z-10 font-medium">Message</span>
            </label>
            <button className="xsm:h-[4.0625rem] h-12 rounded-[13px] flex items-center justify-center text-lg bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] btn-gradeint top-0 left-0 animate-pulse group-hover:animate-none">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


// "use client";
// import Image from "next/image";

// const ContactUs = () => {
//   return (
//     <section id="contact" className="xsm:pb-32 pb-16 scroll-mt-10 mt-28">
//       <div className="container">
//         <div className="items-center bg-[#b9e1ff] text-center ">
//           {/* <div className="md:flex justify-end hidden ">
//             <Image
//               src="/contact-img.jpg"
//               className="max-h-[39.5rem] rounded-sm mr-36"
//               width="520"
//               height="400"
//               alt=""
//             />
//           </div> */}
//           <div className="bg-[#b9e1ff] md:py-20 xsm:pt-8 xsm:pb-16 xsm:px-14 px-5 pt-3 pb-4 rounded-[0.9375rem] md:rounded-tl-none md:rounded-bl-none relative md:before:absolute md:before:h-full md:before:w-32 md:before:rounded-[0.9375rem] md:before:bg-[e5e5e5] md:before:top-0 md:before:-left-28 md:before:-z-10 md:before:rounded-tr-none md:before:rounded-br-none">
//             <h3 className="sm:text-h3 xsm:text-h4 text-h5 font-bold text-black mb-24">
//               Get in Touch
//             </h3>
//             <form action="" className="flex flex-col gap-5 ">
//               <label htmlFor="" className="relative custom_label mt-3">
//                 <input
//                   className="w-full bg-input xsm:h-16 h-12 rounded-[13px] shadow-none outline-none px-4 mt-5 "
//                   type="text"
//                   name="user_name"
//                 />
//                 <span className="absolute z-10 font-medium">Name</span>
//               </label>
//               <label htmlFor="" className="relative custom_label">
//                 <input
//                   className="w-full bg-input xsm:h-16 h-12 rounded-[13px] shadow-none outline-none px-4 mt-5"
//                   type="email"
//                   name="user_email"
//                 />
//                 <span className="absolute z-10 font-medium">Email</span>
//               </label>
//               <label htmlFor="" className="relative custom_label">
//                 <textarea
//                   className="w-full bg-input rounded-[13px] h-[9.375rem] resize-none shadow-none outline-none px-4 pt-4 mt-5"
//                   name="user_message"
//                 ></textarea>
//                 <span className="absolute z-10 font-medium">Message</span>
//               </label>
//               <button className="xsm:h-[4.0625rem] h-12 rounded-[13px] flex items-center justify-center text-lg bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] btn-gradeint top-0 left-0 animate-pulse group-hover:animate-none">
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
