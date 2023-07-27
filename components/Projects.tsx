import ProjectItem from './ProjectItem';
import { moive, eCommerce, corporationX, delicito } from '@/data';

const Projects = () => {
  return (
    <section id="projects" className="md:py-[90px] py-10 ">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <h2 className="dark:text-slate-200 text-slate-800 font-semibold sm:text-[32px] text-[22px] leading-[50px] w-full tracking-wider text-center sm:mb-10 mb-6 pt-10">
          My Projects
        </h2>
        <p className="paragraph text-center mb-6 sm:mb-10">
          Here are a few past projects I&apos;ve worked on. Want to see more?
          Please visit my{' '}
          <a
            href="https://github.com/khinsuwai97"
            target="_blank"
            className="text-blueColor font-bold"
          >
            GitHub.
          </a>
        </p>
        <ProjectItem
          title={moive.title}
          image={moive.image}
          content={moive.content}
          code={moive.code}
          liveDemo={moive.liveDemo}
          order={true}
        />
        <ProjectItem
          title={eCommerce.title}
          image={eCommerce.image}
          content={eCommerce.content}
          code={eCommerce.code}
          liveDemo={eCommerce.liveDemo}
          order={false}
        />
        <ProjectItem
          title={corporationX.title}
          image={corporationX.image}
          content={corporationX.content}
          code={corporationX.code}
          liveDemo={corporationX.liveDemo}
          order={true}
        />
        <ProjectItem
          title={delicito.title}
          image={delicito.image}
          content={delicito.content}
          code={delicito.code}
          liveDemo={delicito.liveDemo}
          order={false}
        />
      </div>
    </section>
  );
};

export default Projects;
