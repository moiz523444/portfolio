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
        {/* 🔹 Repossession Management Section */}
        <div className="min-h-screen w-full px-6 pt-[9rem] pb-20">
          <h1 className="text-center font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-14 drop-shadow-lg tracking-wide">
            Repossession Management
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* ✅ Left Content */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Our Repossession Management Module supports lenders in
                efficiently recovering collateral tied to overdue or defaulted
                loans. It ensures legal compliance, cost efficiency, and
                complete operational transparency throughout the recovery
                lifecycle.
              </p>

              <ul className="space-y-4 font-semibold">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Automated Compliance & Authorization Workflows
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Real-Time Tracking of Recovery Teams & Activities
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Asset Condition, Storage & Movement Monitoring
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Alerts for Legal Status, Auction & Disposal Events
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Full Audit Trail & Digitized Documentation
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
                  src="/assests/picturesofcards/reposession.jpg"
                  alt="Repossession Management"
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
