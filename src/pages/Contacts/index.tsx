import { Footer } from "@features/Footer/ui";
import { Header } from "@features/Header/ui";
import { Form } from "@widgets/Form/ui";
import { ContactsScreen } from "@widgets/Screens/Contacts";

export const ContactsPage = () => {
  return (
    <div>
      <Header />
      <ContactsScreen />
      <Form />
      <Footer />
    </div>
  );
};
