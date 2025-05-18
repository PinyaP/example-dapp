"use client";

import { WorkTemplate } from "../components/worktemplate";
import workplace from "../public/workedplace.json";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl mb-2">Pinya Potichaichin</span>
            <span className="block text-2xl font-bold">
              +6682-052-0059 | prupinya1@gmail.com | linkedin.com/in/pinya-p
            </span>
          </h1>
        </div>
      </div>
      <div className="flex-row justify-center">
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
