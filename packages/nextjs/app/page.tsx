"use client";

import { WorkTemplate } from "../components/worktemplate";
import workplace from "../public/workedplace.json";
import type { NextPage } from "next";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
    <div className="flex flex-col items-center pt-10 mb-5">
    <Image
      src="/profile-pic.jpg"
      width={80}
      height={80}
      alt="Profile Picture"
      className="rounded-full mb-4"
    />
    
  <div className="text-center space-y-4 px-5">
  <h1 className="text-4xl font-semibold">Pinya Potichaichin</h1>
  <p className="text-xl font-medium">
    +6682-052-0059 | prupinya1@gmail.com
  </p>
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center gap-2">
      <Image
        src="/linkedin.png"
        width={24}
        height={24}
        alt="LinkedIn Logo"
        className="rounded"
      />
      <a
        href="https://linkedin.com/in/pinya-p"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-lg"
      >
        linkedin.com/in/pinya-p
      </a>
    </div>

    <div className="flex items-center gap-2">
      <Image
        src="/github.jpg"
        width={24}
        height={24}
        alt="GitHub Logo"
        className="rounded"
      />
      <a
        href="https://github.com/PinyaP"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-lg"
      >
        github.com/PinyaP
      </a>
    </div>
  </div>

  <a
    href="/Pinya's Resume.pdf"
    download
    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
  >
    <DocumentArrowDownIcon className="h-5 w-5" />
    Download CV
  </a>
</div>
  </div>

      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col items-center">
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
    </>
  );
};

export default Home;
