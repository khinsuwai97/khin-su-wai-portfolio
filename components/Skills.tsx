import { techStacks } from '@/data';

const Skills = () => {
  return (
    <section id="skills" className="md:py-[90px] py-10 ">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <h2 className="dark:text-slate-200 text-slate-800 font-semibold sm:text-[32px] text-[22px] leading-[50px] w-full tracking-wider text-center sm:mb-10 mb-6 pt-10">
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 mb-6">
          {techStacks.map((tech) => {
            return (
              <div key={tech.id} className="flex gap-2">
                <span className="text-cyan-700 text-[25px]">{tech.icon}</span>
                <p className="paragraph">{tech.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
