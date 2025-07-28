'use client';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import KhinSu from '../public/images/KhinSu.png';
// w-full flex flex-col justify-center items-center
const Hero = () => {
  return (
    <section id="home" className=" md:pb-[90px] pb-3 md:pt-0 pt-20 ">
      <div className="xl:max-w-[1280px] mx-auto py-0 sm:px-[64px] px-[24px] ">
        <div className=" sm:px-16 px-6 md:mt-20 z-10  ">
          <h1 className=" text-blueColor tracking-wide font-bold sm:text-[52px] ss:text-[44px] text-[34px] ss:leading-[80px] text-center  leading-[40px] ">
            Front-End React Developer
          </h1>
          <p className="tracking-wider font-bold sm:text-[20px] text-[18px] ss:leading-[30px] text-center mt-5 dark:text-slate-200 text-slate-800 leading-[25px]">
            Hi, I&apos;m Khin Su Wai. A self-taught Front-end React Developer
            based in Chiang Mai, Thailand.
          </p>
        </div>
        <div className="relative z-10 mt-12">
          <div className="flex items-center justify-center">
            <Image src={KhinSu} width={220} height={200} alt="khinsu photo" />
          </div>
        </div>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="mt-12 mb-6 flex items-center justify-center cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowDown
            size={35}
            className="text-cyan-700"
          />
        </Link>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-50 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
