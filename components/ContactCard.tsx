import { contacts, otherContacts } from '@/data';

const ContactCard = () => {
  return (
    <div className="grid md:grid-cols-4 ss:grid-cols-2 grid-cols-1 gap-4">
      {contacts.map((contact) => {
        return (
          <div
            className="contact-card dark:bg-bgContactDark bg-bgContact flex flex-col items-center justify-center px-4 py-5 "
            key={contact.id}
          >
            <div
              className={`w-[40px] h-[40px] rounded-full flex justify-center items-center mb-2 dark:bg-blueColor1 bg-blueColor2`}
            >
              <span className="text-[22px] text-slate-200  ">
                {contact.icon}
              </span>
            </div>
            <div className="flex items-center flex-col justify-center">
              <h4 className="paragraph-small my-2">{contact.title}</h4>
              <a
                href={contact.href}
                className="paragraph-small"
                target="_blank"
              >
                {contact.text}
              </a>
            </div>
          </div>
        );
      })}
      <div className="contact-card dark:bg-bgContactDark bg-bgContact flex flex-col items-center justify-center px-4 py-5 ">
        <div
          className={`w-[40px] h-[40px] rounded-full flex justify-center items-center mb-2 dark:bg-blueColor1 bg-blueColor2`}
        >
          <span className="text-[22px] text-slate-200  ">
            {otherContacts.icon}
          </span>
        </div>
        <div className="flex items-center flex-col justify-center">
          <h4 className="paragraph-small my-2">{otherContacts.title}</h4>
          <div className="flex gap-4 justify-center items-center">
            {otherContacts.icons.map((contact) => {
              return (
                <a
                  href={contact.link}
                  key={contact.id}
                  target="_blank"
                  className="text-[20px]"
                >
                  {contact.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
