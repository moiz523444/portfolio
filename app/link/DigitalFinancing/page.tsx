"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CardsOfOurServices from "@/components//section/Home/CardsOfOurServices"; // correct path de do

const Page = () => {
  return (
    <section className="w-full">
      {/* 🔹 Digital Financing Section */}
      <div className="min-h-screen w-full px-6 pt-[9rem] pb-20">
        <h1 className="text-center font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-14 drop-shadow-lg tracking-wide">
          Digital Financing
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* ✅ Left Content */}
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Digital Financing ke zariye aap fast, secure aur seamless
              workflows ke through business operations ko automate kar sakte
              hain. Humari tech-enabled solutions aapko smarter finance
              decisions lene mein help karti hain.
            </p>

            <ul className="space-y-4 font-semibold">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Fast Loan Approvals
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Secure Digital Transactions
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                Automated Reporting
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">✔</span>
                User-Friendly Dashboards
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
                src="/assests/picturesofcards/digital_financing.jpg"
                alt="Digital Financing"
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

export default Page;
