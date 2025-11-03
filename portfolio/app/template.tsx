"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Loader from "@/components/section/Loading";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import AnimatedCursor from "react-animated-cursor";
import { motion, AnimatePresence } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // useEffect(() => {
  //   const siteLoaded = () => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 50);
  //   };
  //   if (document.readyState === "complete") {
  //     siteLoaded();
  //   }
  // }, []);

  return (
    <>
      <main
        className={`${Loading ? "overflow-hidden w-screen h-screen" : null}`}
      >
        <div className="md:block hidden">
          <AnimatedCursor
            color="0, 0 ,0" // Black cursor for visibility on light background
            innerSize={12}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0.8} // Slight transparency for a softer effect
            outerStyle={{
              mixBlendMode: "multiply", // works better on light backgrounds
            }}
          />
        </div>

        <header>
          <Navbar />
        </header>
        <AnimatePresence initial={false} mode="wait">
          {/* {Loading && (
            <motion.div
              key="loader"
              exit={{ y: "-100%", opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 bg-card-foregrounddark left-0 w-full h-screen opacity-100 z-50"
            >
              <Loader />
            </motion.div>
          )} */}
        </AnimatePresence>
        {children}
        <Footer />
      </main>
    </>
  );
}
