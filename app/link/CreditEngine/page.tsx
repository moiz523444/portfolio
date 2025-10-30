"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CardsOfOurServices from "@/components/section/Home/CardsOfOurServices"; // correct path

const CreditEnginePage = () => {
  return (
    <section className="w-full">
      {/* 🔹 Credit Engine Section */}
      <div className="min-h-screen w-full px-6 pt-[9rem] pb-20">
        <h1 className="text-center font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-14 drop-shadow-lg tracking-wide">
          Credit Engine
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* ✅ Left Content */}
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Humara Credit Engine intelligent risk scoring, data-driven credit
              decisions aur automated loan approvals enable karta hai — jisse
              credit lifecycle fast aur accurate ban jata hai.
            </p>

            <ul className="space-y-4 font-semibold">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                AI-Based Risk Scoring
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Faster Decisioning Process
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Accurate Loan Eligibility Checks
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Smart Rules Engine
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
                src="/assests/picturesofcards/credit_engine.jpg"
                alt="Credit Engine"
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
  );
};

export default CreditEnginePage;
