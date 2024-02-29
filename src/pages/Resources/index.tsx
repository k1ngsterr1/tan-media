import { Footer } from "@features/Footer/ui";
import { Header } from "@features/Header/ui";
import { ResourcesScreen } from "@widgets/Screens/Resources";

export const ResourcesPage = () => {
  return (
    <div>
      <Header />
      <ResourcesScreen />
      <Footer />
    </div>
  );
};
