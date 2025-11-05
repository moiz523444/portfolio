"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#CardsOfOurServices", label: "Our Solution" },
];

const Footer = () => {
  const pathName = usePathname().split("/")[1];
  return (
    <footer
      className="relative rounded-[1.25rem] bg-cover bg-center bg-no-repeat"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="w-full border-t border-black backdrop-blur-sm">
        <div className="container flex flex-col justify-between py-6">
          <div className="grid xsm:grid-cols-3 gap-4">
            {/* Logo + Address */}
            <div>
              <div className="flex items-end justify-start pl-3 mb-4">
                <Image src="/logo.png" alt="Logo" width="70" height="60" />
                <Image
                  className="ml-[-38px]"
                  src="/logo-title.png"
                  alt="Logo"
                  width="101"
                  height="60"
                />
              </div>
              <p className="text-black text-lg ml-3 leading-tight">
                Riyadh, Saudi Arabia
              </p>
            </div>

            {/* Links */}
            <ul className="flex md:gap-9 gap-4 items-center md:flex-row flex-col justify-end xsm:col-start-3">
              {navLinks.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    className={`relative text-nowrap xsm:text-body text-sm text-black 
    transition-all duration-300 hover:text-[#2ca6e1] hover:scale-105`}
                    href={`/${navItem.href}`}
                  >
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#2ca6e1] after:transition-all after:duration-300 hover:after:w-full">
                      {navItem.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="border border-black flex flex-col items-center rounded-sm py-4 px-5 gap-3 mt-24">
            <p className="xsm:text-sm text-[0.75rem] text-black text-center">
              Copyright© {new Date().getFullYear()}. FinInnovator.com all
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa6";

// const navLinks = [
//   { href: "#hero", label: "Home" },
//   { href: "#about", label: "About us" },
//   { href: "#services", label: "Services" },
//   { href: "#work", label: "Work" },
//   { href: "#CardsOfOurServices", label: "Our Solution" },
//   // { href: "#testimonials", label: "Testimonials" },
// ];

// const socialLinks = [
//   { icon: <FaFacebookF />, href: "" },
//   { icon: <FaInstagram />, href: "" },
//   { icon: <FaLinkedin />, href: "" },
//   { icon: <FaTwitter />, href: "" },
// ];

// const Footer = () => {
//   const pathName = usePathname().split("/")[1];
//   return (
//     <footer
//       className="relative xsm:h-[350px] h-auto rounded-[1.25rem] bg-cover bg-center bg-no-repeat"
//       style={{
//         clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
//       }}
//     >
//       <div className="w-full border-t border-black backdrop-blur-sm ">
//         <div className="container flex flex-col justify-between h-full py-6 ">
//           <div className="grid xsm:grid-cols-3 xsm:pt-8 gap-4">
//             <div>
//               <div className="flex items-end justify-start pl-3 mb-4">
//                 <Image src="/logo.png" alt="Logo" width="70" height="60" />
//                 <Image
//                   className="ml-[-38px]"
//                   src="/logo-title.png"
//                   alt="Logo"
//                   width="101"
//                   height="60"
//                 />
//               </div>
//               <p className="text-black text-lg ml-3">
//                 Riyadh Saudia Arabia <br />
//                 {/* Dubai Silicon Oasis <br /> */}
//                 {/* DDP Building A1 <br /> */}
//                 {/* Dubai, United Arab Emirates <br /> */}
//                 {/* +971 56 445 2061 */}
//               </p>
//             </div>
//             <ul className="flex md:gap-9 xsm:gap-4 gap-2 md:items-center items-start md:flex-row flex-col justify-end xsm:col-start-3">
//               {navLinks.map((navItem) => (
//                 <li key={navItem.label}>
//                   <Link
//                     className={`relative text-nowrap xsm:text-body text-sm ${
//                       pathName === navItem.href ? "text-black" : "text-black"
//                     }`}
//                     href={`/${navItem.href}`}
//                   >
//                     {navItem.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* <div className="border border-black flex xsm:flex-row flex-col items-center justify-between rounded-sm xsm:py-6 py-4 xsm:px-5 px-2 gap-3 ">
//             <div className="flex items-center gap-2 ">
//               <p className="text-black font-semibold xsm:text-body text-sm">
//                 Follow us on :
//               </p>
//               { <ul className="flex items-center gap-1">
//                 {socialLinks.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       href={item.href}
//                       className="footer_icons w-8 h-8 p-2 rounded-full grid place-items-center bg-gradient-to-br from-[#38a2e4] to-[#7794bd] text-black"
//                     >
//                       {item.icon}
//                     </Link>
//                   </li>
//                 ))}
//               </ul> }
//             </div>
//             <p className="xsm:text-sm text-[0.75rem] text-black text-center">
//               Copyright© 2025. FinInnovator.com all right reserved
//             </p>
//           </div> */}
//           <div className="border border-black flex flex-col items-center rounded-sm py-6 px-5 gap-3 mt-28">
//             <div className="flex items-center gap-2">
//               {/* Social links here if needed */}
//             </div>

//             <p className="xsm:text-sm text-[0.75rem] text-black text-center">
//               Copyright© 2025. FinInnovator.com all rights reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
