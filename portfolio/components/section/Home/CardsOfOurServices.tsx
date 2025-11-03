"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CardsOfOurServices = () => {
  const serviceCards = [
    {
      image: "/assests/picturesofcards/digital_financing.jpg",
      title: "Digital Financing",
      href: "/link/DigitalFinancing",
      paragraph:
        "Empower your business with next-gen digital financing solutions, enhancing speed and efficiency for smarter financial decisions.",
    },
    {
      image: "/assests/picturesofcards/lo.jpg",
      title: "Loan Origination",
      href: "/link/LoanOrganization",
      paragraph:
        "Streamline client loan processing with automated origination tools, enabling fast approvals and precise decision-making.",
    },
    {
      image: "/assests/picturesofcards/loan_management.jpg",
      title: "Loan Management",
      href: "/link/LoanManagement",
      paragraph:
        "Simplify loan tracking and administration using robust management solutions designed for accuracy and efficiency.",
    },
    {
      image: "/assests/picturesofcards/lc.jpg",
      title: "Loan Collection",
      href: "/link/LoanCollection",
      paragraph:
        "Enhance recovery processes with smart collection tools, ensuring timely payments and improved cash flow management.",
    },
    {
      image: "/assests/picturesofcards/leased.jpg",
      title: "Leased Inventory Management",
      href: "/link/LeasedInventoryMangement",
      paragraph:
        "Optimize leased asset tracking and management with automated workflows, reducing errors and boosting operational efficiency.",
    },
    {
      image: "/assests/picturesofcards/credit_engine.jpg",
      title: "Credit Engine",
      href: "/link/CreditEngine",
      paragraph:
        "Evaluate credit risk quickly and accurately using advanced credit engine solutions, improving approval speed and reliability.",
    },
    {
      image: "/assests/picturesofcards/sme_loan.jpg",
      title: "SME Loan Origination",
      href: "/link/SMELoanOrganization",
      paragraph:
        "Accelerate SME loan processing with streamlined workflows, ensuring faster approvals and better client engagement.",
    },
    {
      image: "/assests/picturesofcards/AML.jpg",
      title: "AML & CF",
      href: "/link/AML&CF",
      paragraph:
        "Stay compliant with AML and counter-fraud measures, safeguarding your organization while enabling smooth transactions.",
    },
    {
      image: "/assests/picturesofcards/collateral_mangemnet.jpg",
      title: "Collateral Management",
      href: "/link/CollatorealManagement",
      paragraph:
        "Manage and monitor collateral efficiently, ensuring proper asset control and risk mitigation across operations.",
    },
    {
      image: "/assests/picturesofcards/reposession.jpg",
      title: "Repossession Module",
      href: "/link/RepossisionModule",
      paragraph:
        "Handle asset repossession with automated tools, improving recovery efficiency and minimizing operational delays.",
    },
    {
      image: "/assests/picturesofcards/legal_case.jpg",
      title: "Legal Case Management",
      href: "/link/LegalCasesManagement",
      paragraph:
        "Track and manage legal cases effectively, ensuring accurate documentation and streamlined case workflows.",
    },
    {
      image: "/assests/picturesofcards/treasure_management.jpg",
      title: "Treasury Management",
      href: "/link/TreasuryManagement",
      paragraph:
        "Enhance cash and liquidity management using advanced treasury solutions for optimized financial control.",
    },
    {
      image: "/assests/picturesofcards/customer_service.jpg",
      title: "Customer Service",
      href: "/link/CustomerService",
      paragraph:
        "Improve client interactions with smart service tools, ensuring faster response times and enhanced satisfaction.",
    },
    {
      image: "/assests/picturesofcards/document_management.jpg",
      title: "Document Management System",
      href: "/link/DocumentManagement",
      paragraph:
        "Centralize and streamline document handling, enhancing accessibility, security, and workflow efficiency.",
    },
    {
      image: "/assests/picturesofcards/Cyber_Security.jpg",
      title: "Cyber Security",
      href: "/link/CyberSecurity",
      paragraph:
        "Protect your digital infrastructure with proactive cybersecurity measures, ensuring safe and reliable operations.",
    },
    {
      image: "/assests/picturesofcards/legal_case.jpg",
      title: "Legal Case Management",
      href: "/link/LegalCasesManagement",
      paragraph:
        "Manage all legal documentation and proceedings with structured tools for smooth and organized case handling.",
    },
  ];

  return (
    <section>
      <div id="CardsOfOurServices" className="container overflow-hidden">
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
