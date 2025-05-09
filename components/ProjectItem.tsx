import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface ProjectItemProps {
  title: string;
  image: StaticImageData;
  content: string;
  code: string;
  liveDemo: string;
  order?: boolean;
}

const ProjectItem: FC<ProjectItemProps> = ({
  title,
  image,
  content,
  code,
  liveDemo,
  order,
}) => {
  return (
    <div className="grid  md:grid-cols-2 grid-cols-1 justify-center items-center gap-8 mb-20  ">
      <a
        href={liveDemo}
        target="_blank"
        className={`flex justify-center items-center ${
          order ? 'md:order-first' : 'md:order-last order-first'
        }`}
      >
        <Image
          src={image}
          height={200}
          width={500}
          alt="movieHub Photo"
          className="rounded-md shadow-md z-10"
        />
      </a>
      <div>
        <div className="flex justify-center items-center gap-2 mb-4">
          <h3 className="paragraph-header text-center">{title}</h3>
        </div>
        <p className={`paragraph mb-4 ${order ? '' : 'md:mr-10 mr-0'} `}>
          {content}
        </p>
        <div className="flex justify-center items-center gap-4">
          <a
            href={code}
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <p className="paragraph-small  font-bold">Code</p>
            <span className="text-blueColor">
              <FaGithub size={20} />
            </span>
          </a>
          <a
            href={liveDemo}
            target="_blank"
            className="flex justify-center items-center gap-1"
          >
            <p className="paragraph-small font-bold">Live Demo</p>
            <span className="text-blueColor">
              <FaArrowUpRightFromSquare size={16} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
