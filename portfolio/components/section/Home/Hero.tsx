"use client";
import { ScrollIcon } from "@/components/ui/icons";
import Transition from "@/components/ui/transition";
import Image from "next/image";
import { Suspense, useState, useEffect } from "react";

const Hero = () => {
  const [Loading, setLoading] = useState(true);
  // const [showPopup, setShowPopup] = useState(false);

  // // Show popup automatically on page load
  // useEffect(() => {
  //   setShowPopup(true);
  // }, []);

  return (
    <section
      id="hero"
      className="xsm:pt-[10rem] pt-[5rem] relative isolate min-h-screen xsm:block flex justify-center items-center"
    >
      {/* Background blur */}
      <div className="absolute 2xl:-top-[62.5rem] xl:-top-[42.5rem] md:-top-[32.5rem] sm:-top-[22.5rem] -top-[1.5rem] left-1/2 -translate-x-1/2 w-full -z-50 pointer-events-none max-w-[120rem] blur-[3.125rem]"></div>

      <div className="container relative">
        {Loading && (
          <h1 className="lg:text-h1 xsm:text-h2 text-h4 flex flex-col font-bold w-fit m-auto relative z-20">
            <div className="relative overflow-hidden">
              <Transition>
                <span className=" xsm:ml-[1.5em] ml-[1.25em] inline-block">
                  FININNOVATOR
                </span>
              </Transition>
            </div>
            <div className=" overflow-hidden">
              <Transition>
                <span className=" xsm:ml-[1.5em] ml-[1.25em] inline-block mr-80">
                  COMPANY
                </span>
              </Transition>
            </div>
          </h1>
        )}

        {/* Scroll Icon */}
        <div className="flex flex-col justify-center items-center xsm:my-12 mt-48 text-black relative z-20">
          <div className=" animate-bounce duration-1000 xsm:max-w-11 max-w-8 filter brightness-0">
            <ScrollIcon />
          </div>
          <h6 className=" text-base font-semibold mt-2">Scroll</h6>
        </div>

        {/* Rotating Logo */}
        <div
          className=" md:w-[160px] md:h-[160px] sm:w-[160px] xsm:w-[120px] w-[80px] sm:h-[160px] xsm:h-[120px] h-[80px] !bg-no-repeat !bg-cover absolute xl:top-[40%] lg:top-[26%] sm:top-[24%] top-[-24%] xl:right-[25%] lg:right-[10%] right-[10%] overflow-hidden filter brightness-0 "
          style={{ background: "url(/inner-logo.webp)" }}
        >
          <Image
            src="/outer-logo2.png"
            alt=""
            fill
            className="!static animate-spin duration-full"
          />
        </div>
      </div>

      {/* Background image */}
      <Suspense
        fallback={
          <h1 className="text-white absolute z-50 font-bold text-[92rem]">
            Loading
          </h1>
        }
      >
        <div className="absolute lg:w-[1200px] md:w-[56.25rem] xsm:w-[500px] w-[300px] lg:h-[700px] md:h-[500px] xsm:h-[400px] h-[200px] pointer-events-none top-[15%] -z-10 -left-[5%]">
          <Image
            className="object-contain"
            src="/main_bnr.png"
            alt="Bg Curve"
            fill
          />
        </div>
      </Suspense>
    </section>
  );
};

export default Hero;
