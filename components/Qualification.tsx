import Image from 'next/image';
import { BiRightArrow } from 'react-icons/bi';
import { aboutData } from '@/data';
import foucs from '../public/images/focus.svg';

const Qualification = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
      <div className="flex justify-center items-center z-10">
        <Image src={foucs} alt="girl photo" width={400} height={200} />
      </div>
      <div>
        {aboutData.map((data) => {
          return (
            <div
              className="flex items-center gap-4 about-card mt-4 px-3"
              key={data.id}
            >
              <span className="blue-gradient1 pl-4">
                <BiRightArrow size={22} className="text-cyan-700" />
              </span>
              <div>
                <h3 className="dark:text-white text-slate-800 tracking-wide font-bold text-[22px] leading-[23.4px] mb-2">
                  {data.title}
                </h3>
                <p className="paragraph">{data.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Qualification;
