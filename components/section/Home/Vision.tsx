"use client";
import VisionCard from "@/components/ui/visionCard";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Vision = () => {
  const content = [
    {
      heading: "Our Mission",
      details: `Our mission is to craft innovative software that simplifies challenges, sparks creativity, and helps businesses grow faster. We believe in building solutions that are not only powerful but also easy to use, creating real value for both companies and their customers.`,
    },
    {
      heading: "Our Vision",
      details: `Our vision is to shape the future of technology by creating digital experiences that inspire, connect, and transform the way people and businesses interact. We dream of a world where innovation empowers every idea and technology opens doors to endless possibilities.`,
    },
    {
      heading: "Our Goal",
      details: `Our goal is to keep pushing boundaries, exploring new ideas, and delivering solutions that make a difference. With a strong focus on quality and user experience, we aim to help businesses succeed in the fast-changing digital landscape and make companies grow faster.`,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px -100px -250px -100px",
  });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section className="xsm:py-32 py-10">
      <div className="container">
        <motion.div
          ref={ref}
          variants={{
            hidden: { y: 100, opacity: 0, filter: "blur(10px)" },
            visible: {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                staggerChildren: 0.3,
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={mainControls}
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {content.map((visonContent, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              key={index}
            >
              <VisionCard indexed={index} cardContent={visonContent} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
