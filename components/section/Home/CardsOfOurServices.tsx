"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CardsOfOurServices = () => {
  const serviceCards = [
    {
      image: "./assests/picturesofcards/digital_financing.jpg",
      title: " Digital Financing",
      href: "/link/DigitalFinancing",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/lo.jpg",
      title: " Loan Origination",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/loan_management.jpg",
      title: " Loan Management",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/lc.jpg",
      title: " Loan Collection",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/leased.jpg",
      title: "Leased Inventory Management",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/credit_engine.jpg",
      title: "Credit Engine",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/sme_loan.jpg",
      title: " SME Loan Origination",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/AML.jpg",
      title: " AML & CF",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/collateral_mangemnet.jpg",
      title: "Collateral Management",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/reposession.jpg",
      title: "Repossession Module",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/legal_case.jpg",
      title: " Legal Case Management",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/treasure_management.jpg",
      title: "Treasury Management",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/customer_service.jpg",
      title: " Customer Service",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/document_management.jpg",
      title: "Document Management System",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/Cyber_Security.jpg",
      title: "Cyber Security",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
    {
      image: "./assests/picturesofcards/legal_case.jpg",
      title: " Legal Case Management",
      href: "#",
      paragraph:
        "  Unlock the future of financing with our cutting-edge digital financing solutions, delivering innovation and efficiency at fingertips.",
    },
  ];
  return (
    <section>
      <div className="container overflow-hidden">
        {/* Section Heading */}
        <span className="block 2xl:text-h2 xl:text-[4.875rem] xsm:text-h3 text-h6 font-heading font-bold mb-10">
          Our Solutions
        </span>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="text-white border border-white rounded-[8px] bg-cover relative isolate group overflow-hidden h-80 sm:h-96"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {/* Overlay */}
              <div className="bg-gradient-to-t from-black to-transparent w-full h-full py-4 px-3 flex flex-col justify-end transition-transform">
                {/* Heading */}
                <div className="flex items-start justify-left h-full">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold mb-2 z-10 text-left">
                    {card.title}
                  </h1>
                </div>

                {/* Paragraph (always visible on mobile, hover on desktop) */}
                <p
                  className="text-sm sm:text-base lg:text-lg font-body text-white 
          lg:opacity-0 lg:translate-y-5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 
          transition-all duration-500"
                >
                  {card.paragraph}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsOfOurServices;
