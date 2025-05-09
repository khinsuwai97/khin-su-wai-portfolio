export const ButtonMobile = ({ text }: { text: string }) => {
  return (
    <a href="/Khin Su Wai_Resume.pdf" download={true} target="_blank">
      <button
        className={`px-[16px] py-[4px]  bg-blueColor text-[16px] text-slate-200 outline-none tracking-wider cursor-pointer rounded-[5px] whitespace-nowrap `}
      >
        {text}
      </button>
    </a>
  );
};
