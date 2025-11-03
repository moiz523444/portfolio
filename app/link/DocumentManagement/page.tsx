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
        {/* 🔹 Document Management Section */}
        <div className="min-h-screen w-full px-6 pt-[9rem] pb-20">
          <h1 className="text-center font-extrabold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-14 drop-shadow-lg tracking-wide">
            Document Management System
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            {/* ✅ Left Content */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Our Document Management System (DMS) empowers financial
                institutions to securely digitize, organize, and automate
                document workflows — minimizing manual processes, reducing
                compliance risks, and accelerating service delivery.
              </p>

              <ul className="space-y-4 font-semibold">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Encrypted Storage with Role-Based Access Control & Full Audit
                  Trail
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  AI-Powered OCR for Automated Data Capture & Extraction
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Version Control & Secure Digital Signatures Management
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Fast Search with Indexing, Metadata Tagging & Retrieval Tools
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold">✔</span>
                  Fully Compliant with Regulatory, Audit & Security Standards
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
                  src="/assests/picturesofcards/document_management.jpg"
                  alt="Document Management System"
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
