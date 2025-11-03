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
        {/* 🔹 Customer Service Section */}
        <div className="min-h-screen w-full px-6 pt-[9rem] pb-20">
          <h1 className="text-center font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-14 drop-shadow-lg tracking-wide">
            Customer Service
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* ✅ Left Content */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Our Customer Service Module empowers financial institutions to
                provide fast, transparent, and frictionless support across all
                channels — with real-time visibility into service requests and
                resolution progress.
              </p>

              <ul className="space-y-4 font-semibold">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Omni-channel Support (Branch, Mobile, Web, Call Center)
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Intelligent Ticketing & SLA-Based Resolution Tracking
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Customer Profile, History & Product Portfolio View
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Integrated Knowledge Base for Agents & Self-Service Users
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Real-time Feedback, Surveys & CSAT Score Analytics
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
                  src="/assests/picturesofcards/customer_service.jpg"
                  alt="Customer Service"
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
