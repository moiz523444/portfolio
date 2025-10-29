"use client";
import Transition from "@/components/ui/transition";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Hassan Bhai",
    role: "Product Manager",
    image: "/micheal.png",
    feedback: `FinInnovator company  completely transformed our online presence. Their team took the time to understand our 
    business goals and delivered a website that is both visually stunning and highly functional he is professionalism `,
  },
  // {
  //   name: "Osama Bhai",
  //   role: "Fullstack Developer",
  //   image: "/micheal.png",
  //   feedback: `From concept to execution, FinInovator company  exceeded our expectations. Their innovative approach to web development
  //   and attention to detail ensured our platform not only looks great but also performs .`,
  // },
  // {
  //   name: "Rifsha Ashraf",
  //   role: "Fullstack Developer",
  //   image: "/isabelle.png",
  //   feedback: `Working with FinInovator company  was a seamless experience. They communicated clearly, met every deadline,
  //   and provided creative solutions that truly reflected our brand’s identity. We couldn’t be happier with the results.`,
  // },
  {
    name: "Abdullah Ayub",
    role: "Cybersecurity Lead",
    image: "/images.jpg",
    feedback: `FinInnovator company  expertise in both web design and cybersecurity gave us the confidence to take our digital operations
    to the next level. They built a secure, scalable, and user-friendly.We couldn’t be happier with the results.`,
  },
  {
    name: "Huzaifa Rajput",
    role: "Marketing Head",
    image: "/isabelle.png",
    feedback: `The team at FinInnovator company  went above and beyond to deliver a website that not only met our functional
    needs but also stood out in a competitive market. Their professionalism and creativity are unmatched.`,
  },
  {
    name: "Abdul Moiz",
    role: "Business Analyst",
    image: "/download.jpg",
    feedback: `FinInnovator company  turned our vision into reality with precision and innovation. Their ability to merge modern 
    design with cutting-edge technology has given us a powerful online presence that drives real business results.`,
  },
];

const TestimonialCard = ({ name, role, image, feedback }: any) => (
  <div className="bg-[#b9e1ff] rounded-2xl shadow-lg border border-gray-200 p-16 flex flex-col items-center text-center hover:shadow-2xl transition">
    <Image
      className="rounded-full w-30 h-30 object-cover"
      src={image}
      alt={name}
      width={80}
      height={80}
    />
    <Transition>
      <h6 className="text-lg font-bold mt-4">{name}</h6>
    </Transition>
    <p className="text-sm font-bold text-gray-500 mb-4">{role}</p>
    <p className="text-gray-700 text-sm leading-relaxed">{feedback}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="xsm:py-36 py-10 relative">
      <div className="container">
        <Transition>
          <h2 className="2xl:text-h2 xl:text-[4.875rem] xsm:text-h3 text-h5 font-bold text-center mb-10">
            Testimonials
          </h2>
        </Transition>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            660: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="!py-5"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
