"use client";

import { WorkTemplate } from "../components/worktemplate";
import workplace from "../public/workedplace.json";
import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
    <section className="flex flex-row items-center justify-between w-full max-w-5xl mx-auto min-h-screen px-8">
      <motion.div
        className="flex-1 pr-12"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="text-left space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Pinya Potichaichin</h1>
          <p className="text-xl font-medium text-gray-700">
            +6682-052-0059 | prupinya1@gmail.com
          </p>
          <div className="flex flex-row items-center gap-x-4 mt-2">
            <a
              href="https://linkedin.com/in/pinya-p"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
            >
              <Image
                src="/linkedin.png"
                width={28}
                height={28}
                alt="LinkedIn Logo"
                className="rounded"
              />
              linkedin.com/in/pinya-p
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/PinyaP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 hover:underline text-lg"
            >
              <Image
                src="/github.jpg"
                width={28}
                height={28}
                alt="GitHub Logo"
                className="rounded"
              />
              github.com/PinyaP
            </a>
          </div>
          <div className="mt-4 flex flex-col items-start w-fit">
            <div className="text-gray-700 font-semibold mb-2 text-xl">Tech Stack</div>
            <div className="flex flex-row items-center gap-x-4">
              <Image
                src="/html.png"
                width={40}
                height={40}
                alt="HTML"
                title="HTML"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
              <Image
                src="/java.png"
                width={40}
                height={40}
                alt="JavaScript"
                title="JavaScript"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
              <Image
                src="/css.png"
                width={40}
                height={40}
                alt="CSS"
                title="CSS"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
              <Image
                src="/tailwind.png"
                width={40}
                height={40}
                alt="Tailwind"
                title="Tailwind CSS"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
              <Image
                src="/nodejs.png"
                width={40}
                height={40}
                alt="Node.js"
                title="Node.js"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
              <Image
                src="/nextjs-icon.png"
                width={40}
                height={40}
                alt="Next.js"
                title="Next.js"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
              <Image
                src="/react.png"
                width={40}
                height={40}
                alt="React"
                title="React"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
              <Image
                src="/solidity.png"
                width={40}
                height={40}
                alt="Solidity"
                title="Solidity"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
              <Image
                src="/graphql.png"
                width={40}
                height={40}
                alt="GraphQL"
                title="GraphQL"
                className="rounded-full transition-transform hover:scale-110 hover:shadow-lg object-contain bg-white"
              />
            </div>
          </div>
          <a
            href="/Pinya's Resume.pdf"
            className="inline-block mt-6 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold shadow transition"
            download
          >
            Download CV
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex-shrink-0 flex items-center justify-center pr-8"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Image
          src="/profile.jpg"
          width={360}
          height={360}
          alt="Profile Picture"
          className="rounded-full shadow-xl border-4 border-white"
        />
      </motion.div>
    </section>

    {/* Professional Summary*/}
    <motion.div
      className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center py-16 px-8"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="w-full text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Professional Summary</h2>
        <p className="text-gray-700 text-2xl font-medium max-w-3xl mx-auto">
          Detail-oriented software engineer with experience in blockchain, fullstack, and frontend development. Passionate about building scalable and user-friendly applications.
        </p>
      </div>
    </motion.div>

    {/* Work Experience*/}
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center py-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="text-center text-3xl font-extrabold mb-4 tracking-tight">
        Work Experience
      </div>
      <div className="w-full max-w-4xl flex flex-col gap-4 px-2">
        {workplace.map(workplace => (
          <WorkTemplate
            key={workplace.workplace}
            workplace={workplace.workplace}
            role={workplace.role}
            logo={workplace.logo}
            duration={workplace.duration}
            shortDescription={workplace.shortDescription}
          />
        ))}
      </div>
    </motion.div>
    </>
  );
};

export default Home;
