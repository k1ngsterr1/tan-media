import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ContactCard } from "@shared/ui/ContactCard";

export const ContactsScreen = () => {
  return (
    <section className="container items-center !mt-20 !mb-20">
      <h1 className="heading">Свяжитесь с нами</h1>
      <p className="paragraph text-center w-[50%] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
        facilisis ac tristique ut, malesuada et risus. In hac habitasse platea
        dictumst. Integer laoreet magna nulla, sed feugiat nisi mollis nec. Ut
        tempor id tellus at semper.
      </p>
      <div className="w-[70%] flex justify-between items-center mt-12">
        <ContactCard
          icon={faUser}
          role="ДИРЕКТОР ОТДЕЛА ПРОДАЖ"
          name="Галия"
          email="galiya@umaa.kz"
          number="+7 707 147 51 50"
        />
        <ContactCard
          icon={faUser}
          role="ПРЕДСТАВИТЕЛЬ"
          name="Эльмир"
          email="e.dubkov@umaa.kz"
          number="+7 705 278 18 76"
        />
        <ContactCard
          icon={faUser}
          role="МЕНЕДЖЕР ПО ПРОДАЖАМ"
          name="Асель"
          email="a.mynbaeva@umaa.kz"
          number="+7 701 808 88 54"
        />
      </div>
    </section>
  );
};
