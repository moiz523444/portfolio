"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CardsOfOurServices from "@/components/section/Home/CardsOfOurServices";
import PageTransition from "@/components/ui/PageTransition";

const Page = () => {
  return (
    <PageTransition>
      <section className="w-full">
        {/* 🔹 Legal Case Management Section */}
        <div className="min-h-screen w-full px-6 pt-[9rem] pb-20">
          <h1 className="text-center font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-14 drop-shadow-lg tracking-wide">
            Legal Case Management
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* ✅ Left Content */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Our Legal Case Management Module enables banks and financial
                institutions to efficiently manage all legal proceedings related
                to overdue or disputed accounts. With complete case lifecycle
                visibility, secure document handling, and regulatory compliance,
                legal operations become faster and more transparent.
              </p>

              <ul className="space-y-4 font-semibold">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  End-to-End Case Tracking: Filing, Hearings, Judgment &
                  Settlement
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Automated Alerts for Hearings, Deadlines & Court Notifications
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Lawyer Assignment, Performance Monitoring & Cost Control
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Secure Digital Document Repository & Evidence Management
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Seamless Integration with Loan, Collections & Repossession
                  Systems
                </li>
              </ul>

              <Link href="/#contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="btn-gradeint text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg mt-4"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* ✅ Right Image */}
            <div className="flex justify-center">
              <div className="flex justify-center w-full">
                <Image
                  src="/assests/picturesofcards/legal_case.jpg"
                  alt="Legal Case Management"
                  width={400}
                  height={250}
                  className="rounded-2xl shadow-xl object-cover max-w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Cards Section */}
        <div className="py-20">
          <CardsOfOurServices />
        </div>
      </section>
    </PageTransition>
  );
};

export default Page;
