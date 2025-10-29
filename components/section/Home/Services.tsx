"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/ParallexCards";

const Services = () => {
  const projects = [
    {
      title: "Information Technology ",
      description:
        "Our Information Technology services are designed to deliver end-to-end digital solutions that drive business efficiency, innovation, and growth. We specialize in creating and maintaining robust IT infrastructures, developing custom software applications, integrating advanced systems, and providing reliable technical support. Whether you require cloud solutions, database management, or enterprise system development, our expert team ensures that every solution is tailored to meet your unique operational needs, enabling you to stay ahead in a rapidly evolving digital landscape.",
      src: "/Ui-Ux-Design.webp",
      link: "#",
    },
    {
      title: "Cyber Security",
      description:
        "In today’s interconnected world, cyber threats are more sophisticated than ever. Our Cyber Security services focus on safeguarding your organization’s digital assets against malicious attacks, data breaches, and unauthorized access. We implement multi-layered security protocols, conduct regular vulnerability assessments, and ensure compliance with the latest security regulations. From network monitoring to incident response, our goal is to protect your systems and data, giving you the confidence to operate securely and without disruption in the digital space.",
      src: "/Web-and-app-development.webp",
      link: "#",
    },
    {
      title: "Risk & Governance",
      description:
        "Effective risk management and governance are crucial for long-term business sustainability. Our Risk & Governance services provide a structured approach to identifying potential threats, evaluating their impact, and implementing strategies to mitigate them. We help businesses establish clear policies, maintain regulatory compliance, and improve decision-making processes. Through strong governance frameworks, we enhance transparency, accountability, and operational resilience, enabling organizations to navigate challenges with confidence and maintain stakeholder trust.",
      src: "/Brand-and-Product-Creation.webp",
      link: "#",
    },
    {
      title: "Business Continuity",
      description:
        "Unexpected disruptions — whether from natural disasters, technical failures, or cyber incidents — can halt operations and affect your bottom line. Our Business Continuity services ensure that your critical processes remain operational under any circumstances. We work with you to develop comprehensive continuity plans, implement backup systems, and test recovery procedures, ensuring minimal downtime and quick restoration of services. With our proactive approach, your business can maintain productivity, meet customer expectations, and remain resilient in the face of unforeseen challenges.",
      src: "/Logo-Design.webp",
      link: "#",
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      className="text-black relative md:pb-24 sm:pb-20 pb-16"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center justify-center flex-col mt-12 text-center">
          <h1 className="2xl:text-h3 xl:text-[4.875rem] xsm:text-h4 text-h5 pt-4 xsm:pt-0 font-bold leading-[1.2]">
            What We Are Offering
          </h1>
          <h6 className="2xl:text-h3 xl:text-[4.875rem] xsm:text-h3 text-h5 pt-4 xsm:pt-0 font-bold leading-[1.2]">
            Current Services
          </h6>
        </div>

        {/* Cards */}
        <div ref={container} className="mt-10 space-y-10 sm:space-y-14">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.025, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
