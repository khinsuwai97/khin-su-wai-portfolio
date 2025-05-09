import { ButtonMobile } from "./Button";
import Qualification from "./Qualification";

const About = () => {
  return (
    <section id="about" className="md:py-[90px] pb-14 pt-20">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <div>
          <h2 className="dark:text-slate-200 text-slate-800 font-semibold sm:text-[32px] text-[22px] leading-[50px] w-full tracking-wide text-center sm:mb-10 mb-3 pt-10">
            Hi, I&apos;m Khin Su.Nice to meet you!
          </h2>
          <div className="sm:px-[64px] px-2">
            <div className="mb-10">
              <p className="text-[18px] leading-[32px] tracking-wider dark:text-slate-200   pb-4 text-slate-800">
                I am a self-taught developer specializing in HTML5, CSS3,
                JavaScript (ES6+),TypeScript, React JS ,Next JS and React
                Testing Library. In addition, I can also utilize my skills of
                Tailwind CSS, Redux Toolkit, React Router, Git and GitHub. I
                have good proficiency in English, positive attitude and
                willingness to learn. I studied Bachelor of Business
                Administration ( Service Industry Management) at Siam
                University, Bangkok.I am currently working as a Junior Frontend
                Developer at XENOptics Co.,LTD, THAILAND.
              </p>

              <ButtonMobile text="Resume" />
            </div>
            <Qualification />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
