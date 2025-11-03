"use client";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  src: string;
  progress: any;
  range: any;
  targetScale: any;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="md:h-[80vh] h-[60vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="flex flex-col justify-center items-center relative h-full xl:w-[80%] lg:w-[90%] w-full rounded-2xl sm:p-8 p-4 origin-top bg-card overflow-hidden border border-white/10"
        style={{
          scale,
          top: `calc(10vh + ${i * 25}px)`,
          background: "var(--card)",
        }}
      >
        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-lg font-bold leading-tight uppercase text-center text-card-foreground mb-16">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-4">
          <div
            className="
    md:w-1/2 w-full text-card-foreground 
    text-sm sm:text-base leading-relaxed
    text-justify
    line-clamp-3 md:line-clamp-none
  "
>
            {description}
          </div>

          <div className="relative md:w-1/2 w-full flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl overflow-hidden">
              <motion.img
                style={{ scale: imageScale }}
                className="w-full h-auto object-cover"
                src={src}
                alt="image"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
