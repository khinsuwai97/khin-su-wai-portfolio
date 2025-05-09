import ContactCard from './ContactCard';
const Contact = () => {
  return (
    <section id="contact" className="md:py-[90px] py-8 ">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px] ">
        <h2 className="dark:text-slate-200 text-slate-800 font-semibold sm:text-[32px] text-[22px] leading-[50px] w-full tracking-wider text-center sm:mb-10 mb-6 pt-10">
          Please Contact Me
        </h2>
        <ContactCard />
      </div>
    </section>
  );
};

export default Contact;
