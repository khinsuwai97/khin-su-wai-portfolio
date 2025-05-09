"use client";
import Image from "next/image";
import xenLogo from "../public/xen_logo.png";

const skills = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "MaterialUI" },
  { name: "HeroUI" },
  { name: "Redux" },
  { name: "Tailwind CSS" },
];

const Work = () => {
  return (
    <section id="work" className="md:py-[90px] py-10 ">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <h2 className="dark:text-slate-200 text-slate-800 font-semibold sm:text-[32px] text-[22px] leading-[50px] w-full tracking-wider text-center sm:mb-10 mb-6 pt-10">
          My Work Experience
        </h2>
        <div className="flex gap-2 items-center mb-4">
          <a
            href="https://xenoptics.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={xenLogo} width={60} height={60} alt="xen logo" />
          </a>
          <div>
            <p className="tracking-wider font-bold sm:text-[20px] text-[18px] ss:leading-[30px] ss:text-left text-center  dark:text-slate-200 text-slate-800 leading-[25px]  ">
              Junior Frontend Developer
            </p>
            <p className="tracking-wider font-bold sm:text-[20px] text-[18px] ss:leading-[30px] ss:text-left text-center  dark:text-slate-200 text-slate-800 leading-[25px]  ">
              XENOptics Co.,LTD, THAILAND , Oct 2023 - present
            </p>
          </div>
        </div>
        <div>
          <p className="paragraph">
            As a frontend developer, I am currently working on a Network
            Management System (NMS) and Element Management System (EMS) designed
            to monitor and manage machines across a network. My responsibilities
            include building user-friendly interfaces,good performance of UI and
            real time machine statuses using the ATOMIC DESIGN PATTERN.I
            collaborate closely with backend teams to integrate APIs. I use
            technologies such as React, TypeScript, Redux for state
            management,Hero UI, Tailwind CSS and MUI in my current project.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 border-2 dark:border-gray-800 border-slate-300 rounded-[10px] shadow-sm  dark:bg-primary bg-white text-sm tracking-wide"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
