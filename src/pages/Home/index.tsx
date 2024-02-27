import VantaBackground from "@shared/lib/3d";
import { FormScreen } from "@widgets/Screens/FormScreen";
import { AboutScreen } from "@widgets/Screens/HomePage/About";
import { Footer } from "@features/Footer/ui";

export const HomePage = () => {
  return (
    <div>
      <VantaBackground />
      <AboutScreen />
      <FormScreen />
      <Footer />
    </div>
  );
};
